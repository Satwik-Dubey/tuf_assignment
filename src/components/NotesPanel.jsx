import React from 'react';
import { PenLine, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export default function NotesPanel({
  startDate,
  endDate,
  currentDate,
  notes,
  saveStatus,
  handleNotesChange,
  clearNotes
}) {

  const getPlaceholder = () => {
    if (startDate && endDate) return "Notes for selected range...";
    if (startDate) return "Notes for this day...";
    return "Monthly notes...";
  };

  return (
    <div className="notes-container">
      <div className="notes-header-flex">
        <div className="notes-title">
          <PenLine size={16} />
          <span>
            {startDate && endDate ? `Notes (${format(startDate, 'MMM d')} - ${format(endDate, 'MMM d')})` :
              startDate ? `Notes (${format(startDate, 'MMM d')})` :
                `Notes (${format(currentDate, 'MMMM yyyy')})`}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className={`notes-save-toast ${saveStatus ? 'visible' : ''}`}>{saveStatus}</span>
          {notes && <button className="notes-clear" onClick={clearNotes}><Trash2 size={16} /></button>}
        </div>
      </div>
      <textarea
        className="notes-input"
        placeholder={getPlaceholder()}
        value={notes}
        onChange={handleNotesChange}
      />
    </div>
  );
}
