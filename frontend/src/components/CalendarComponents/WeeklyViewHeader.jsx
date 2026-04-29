import { useState } from "react";

import "./WeeklyView.css";

import EventAdder from "./EventAdder";

export default function WeeklyViewHeader () {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", {
        weekday: "long",
    });

    const [showEventScreen, setShowEventScreen] = useState(false);



    return (
        <div>
            <div className="topRow"> 
                <p>Today's date: {today.toLocaleDateString()}, {weekday}</p>
                <button className="addEventButton" onClick={() => setShowEventScreen(true)}>+ New Event</button>
                {showEventScreen && (
                    <EventAdder 
                        onClose={() => 
                            setShowEventScreen(false)
                        }
                    />
                )}
            </div>
            <div className="week">
                <div className="headerDays">S</div>
                <div className="headerDays">M</div>
                <div className="headerDays">T</div>
                <div className="headerDays">W</div>
                <div className="headerDays">T</div>
                <div className="headerDays">F</div>
                <div className="headerDays">S</div>
            </div>
        </div>
    );
}