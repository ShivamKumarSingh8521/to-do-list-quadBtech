import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Rightbar.css';

const Rightbar = ({ isSidebarOpen, toggleNightMode }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());

  const handleDueDateClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <aside className={`rightbar ${isSidebarOpen ? "visible" : "hidden"}`}>
      <div className="rightbar-container">
        <div className="task-header">
          <input type="checkbox" id="task-check" />
          <label htmlFor="task-check">Buy groceries</label>
          <button className="star-btn">⭐</button>
        </div>

        <div className="rightbar-options">
          <div className="option">
            <button>+ Add Step</button>
          </div>
          <div className="option">
            <button>🔔 Set Reminder</button>
          </div>
          <div className="option">
            <button onClick={handleDueDateClick}>📅 Add Due Date</button>
            {showCalendar && (
              <div className="calendar-popup">
                <Calendar onChange={setDueDate} value={dueDate} />
              </div>
            )}
          </div>
          <div className="option">
            <button>🔁 Repeat</button>
          </div>
        </div>

        <div className="rightbar-footer">
          <p>Created Today</p>
          <button className="delete-btn">🗑️</button>
        </div>
      </div>
    </aside>
  );
};

export default Rightbar;