import React from 'react';
import { 
  format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, 
  addDays, isSameMonth, isSameDay, isAfter, isBefore 
} from 'date-fns';
import DayCell from './DayCell';
import { NATIONAL_HOLIDAYS } from '../constants/holidays';

export default function CalendarGrid({
  currentDate,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  hoverDate,
  setHoverDate,
  isDragging,
  setIsDragging
}) {
  const isSelected = (day) => (startDate && isSameDay(day, startDate)) || (endDate && isSameDay(day, endDate));
  const isEnd = (day) => endDate && isSameDay(day, endDate);
  const isStart = (day) => startDate && isSameDay(day, startDate);

  const isInRange = (day) => {
    if (startDate && endDate) return isAfter(day, startDate) && isBefore(day, endDate);
    if (isDragging && startDate && hoverDate && !endDate) {
      if (isBefore(hoverDate, startDate)) return isAfter(day, hoverDate) && isBefore(day, startDate);
      return isAfter(day, startDate) && isBefore(day, hoverDate);
    }
    return false;
  };

  const monthStart = startOfMonth(currentDate);
  const startDateOfWeek = startOfWeek(monthStart, { weekStartsOn: 1 });

  const rows = [];
  let days = [];
  let day = startDateOfWeek;

  for (let week = 0; week < 6; week++) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      const holidayName = NATIONAL_HOLIDAYS[format(day, 'MM-dd')];
      const isToday = isSameDay(day, new Date());
      const isOutOfMonth = !isSameMonth(day, monthStart);
      
      const isStartDay = isStart(day);
      const isEndDay = isEnd(day);
      const isSelectedDay = isSelected(day);
      const isInRangeDay = isInRange(day);
      const hasRange = Boolean(endDate || (isDragging && hoverDate && !isSameDay(startDate, hoverDate)));

      days.push(
        <DayCell
          key={day.toString()}
          day={cloneDay}
          isToday={isToday}
          isOutOfMonth={isOutOfMonth}
          isStart={isStartDay}
          isEnd={isEndDay}
          isSelected={isSelectedDay}
          isInRange={isInRangeDay}
          hasRange={hasRange}
          holidayName={holidayName}
          onMouseEnter={() => setHoverDate(cloneDay)}
          onMouseLeave={() => setHoverDate(null)}
          onMouseDown={() => {
            setStartDate(cloneDay);
            setEndDate(null);
            setIsDragging(true);
          }}
          onMouseUp={() => {
            if (isDragging && startDate && !isSameDay(startDate, cloneDay)) {
              if (isBefore(cloneDay, startDate)) {
                setEndDate(startDate);
                setStartDate(cloneDay);
              } else {
                setEndDate(cloneDay);
              }
            }
            setIsDragging(false);
          }}
        />
      );
      day = addDays(day, 1);
    }
    rows.push(<React.Fragment key={`week-${week}`}>{days}</React.Fragment>);
    days = [];
  }

  return (
    <div className="calendar-grid">
      {[...Array(7)].map((_, i) => (
        <div className="weekday" key={i}>
          {format(addDays(startOfWeek(currentDate, { weekStartsOn: 1 }), i), "E")}
        </div>
      ))}
      {rows}
    </div>
  );
}
