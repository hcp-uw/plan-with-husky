import { useState } from "react";

import "./WeeklyView.css";

export default function WeeklyViewHeader({ onAddClick }) {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div>
            <div className="topRow"> 
                <p className="headerDate">Today's date: {today.toLocaleDateString()}, {weekday}</p>
                <button className="addEventButton" onClick={onAddClick}>+ New Event</button>
            </div>
            <div className="week">
                <div className="timeSpacer" />

                <div className="headerDays">Sun</div>
                <div className="headerDays">Mon</div>
                <div className="headerDays">Tue</div>
                <div className="headerDays">Wed</div>
                <div className="headerDays">Thu</div>
                <div className="headerDays">Fri</div>
                <div className="headerDays">Sat</div>

                <div className="scrollbarSpacer" />
            </div>
        </div>
    );
}