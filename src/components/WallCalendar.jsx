import React, { useState, useEffect } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarGrid from './CalendarGrid';
import NotesPanel from './NotesPanel';

const getMonthColors = (monthStr) => {
  const colors = {
    'January': { h: 217, s: 91, l: 60 },
    'February': { h: 330, s: 81, l: 60 },
    'March': { h: 142, s: 71, l: 45 },
    'April': { h: 45, s: 93, l: 47 },
    'May': { h: 175, s: 84, l: 32 },
    'June': { h: 200, s: 98, l: 39 },
    'July': { h: 346, s: 87, l: 43 },
    'August': { h: 24, s: 98, l: 50 },
    'September': { h: 43, s: 74, l: 49 },
    'October': { h: 24, s: 95, l: 53 },
    'November': { h: 329, s: 81, l: 30 },
    'December': { h: 142, s: 76, l: 36 },
  };
  return colors[monthStr] || { h: 160, s: 84, l: 39 };
};

export default function WallCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoverDate, setHoverDate] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const [notes, setNotes] = useState('');
  const [saveStatus, setSaveStatus] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const key = getStorageKey();
    const savedNotes = localStorage.getItem(key);
    setNotes(savedNotes || '');
    setIsTyping(false);
  }, [currentDate, startDate, endDate]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const getStorageKey = () => {
    if (startDate && endDate) {
      return `notes_range_${format(startDate, 'yyyyMMdd')}_${format(endDate, 'yyyyMMdd')}`;
    } else if (startDate) {
      return `notes_day_${format(startDate, 'yyyyMMdd')}`;
    }
    return `notes_month_${format(currentDate, 'yyyyMM')}`;
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    const handler = setTimeout(() => {
      localStorage.setItem(getStorageKey(), notes);
      setSaveStatus('Saved!');
      setTimeout(() => setSaveStatus(''), 2000);
      setIsTyping(false);
    }, 500);

    return () => clearTimeout(handler);
  }, [notes, isTyping, currentDate, startDate, endDate]);

  const clearNotes = () => {
    setNotes('');
    localStorage.removeItem(getStorageKey());
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStr = format(currentDate, 'MMMM');
  const monthColors = getMonthColors(monthStr);
  const themeStyles = {
    '--primary': `hsl(${monthColors.h}, ${monthColors.s}%, ${monthColors.l}%)`,
    '--primary-hover': `hsl(${monthColors.h}, ${monthColors.s}%, ${Math.max(20, monthColors.l - 10)}%)`,
    '--primary-light': `hsl(${monthColors.h}, ${monthColors.s}%, 90%)`
  };

  return (
    <div style={{ ...themeStyles, width: '100%' }}>
      <div className="calendar-wrapper">

        {/* Binding Mechanism exactly from uploaded image */}
        <div className="custom-image-bind">
          <img src="/spiral.png" alt="Spiral Binding" className="spiral-bind-image" />
        </div>

        <div className="calendar-card">
          <div className="calendar-hero">
            <img
              src="/heroo.png"
              alt="Calendar hero"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            <div
              className="hero-overlay"
              style={{ background: `linear-gradient(to top, hsla(${monthColors.h}, ${monthColors.s}%, ${Math.max(10, monthColors.l - 15)}%, 0.9) 0%, transparent 60%)` }}
            >
              <div className="hero-year">{format(currentDate, 'yyyy')}</div>
              <div className="hero-month">{format(currentDate, 'MMMM')}</div>
            </div>
          </div>

          <div className="calendar-content">
            <div className="date-controls">
              <span className="current-month-display">{format(currentDate, 'MMMM yyyy')}</span>
              <div className="month-nav">
                <button onClick={prevMonth} className="nav-btn"><ChevronLeft size={20} /></button>
                <button onClick={nextMonth} className="nav-btn"><ChevronRight size={20} /></button>
              </div>
            </div>

            <CalendarGrid
              currentDate={currentDate}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              hoverDate={hoverDate}
              setHoverDate={setHoverDate}
              isDragging={isDragging}
              setIsDragging={setIsDragging}
            />

            <NotesPanel
              startDate={startDate}
              endDate={endDate}
              currentDate={currentDate}
              notes={notes}
              saveStatus={saveStatus}
              handleNotesChange={handleNotesChange}
              clearNotes={clearNotes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
