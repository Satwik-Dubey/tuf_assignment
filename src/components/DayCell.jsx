import React from 'react';
import { format } from 'date-fns';

export default function DayCell({
  day,
  isToday,
  isOutOfMonth,
  isStart,
  isEnd,
  isSelected,
  isInRange,
  hasRange,
  holidayName,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp
}) {
  let classNames = "day-cell";
  if (isOutOfMonth) classNames += " out-of-month";
  if (isToday) classNames += " is-today";
  if (holidayName) classNames += " has-holiday";
  if (isStart) {
    classNames += " is-start";
    if (hasRange) classNames += " has-range";
  } else if (isEnd) {
    classNames += " is-end has-range";
  } else if (isInRange) {
    classNames += " in-range";
  } else if (isSelected) {
    classNames += " is-selected";
  }

  return (
    <div className="day-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={classNames} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <div className="day-bg"></div>
        <span className="day-text">{format(day, "d")}</span>
        {holidayName && <div className="holiday-dot"></div>}
      </div>
      {holidayName && <div className="holiday-tooltip">{holidayName}</div>}
    </div>
  );
}
