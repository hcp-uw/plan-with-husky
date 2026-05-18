import { useState } from "react";
import { differenceInMinutes } from 'date-fns';

import "./EventAdder.css";
import "../TaskScreen.css";

export default function EventAdder ({ onClose, onSave }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [endTime, setEndTime] = useState("");

    function handleSaveAndClose() {
        const curr = new Date();
        const safeName = name.trim() || "(No name)";

        const safeDate = date || new Date().toLocaleDateString("en-CA");
        const safeTime = time || curr.toTimeString().slice(0, 5);


        const [y, m, d] = safeDate.split("-");
        const [h, min] = safeTime.split(":");

        const dateTime = new Date(y, m - 1, d, h, min);

        const endDateTime = endTime
        ? new Date(y, m - 1, d, ...endTime.split(":"), 0)
        : new Date(dateTime.getTime() + 30 * 60000);

        if (endDateTime < dateTime) {
            alert("End time should not be before start time.")
            return;
        }

        const duration = differenceInMinutes(endDateTime, dateTime);
        
        const event = {
            id: crypto.randomUUID(),
            name: safeName,
            dateTime,
            endDateTime,
            duration,
            category
        };

        onSave(event);
        onClose();
    }

    return (
        <>
            <div className="screen-overlay" onClick={onClose}>
                <div className="screen-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modalHeader">
                        <h2>Event Screen</h2>
                        <button className="close-button" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className="event-information">
                        <div className="formRow">
                            <input 
                                placeholder="Event name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input 
                                type="date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="formRow">
                            <input 
                                placeholder="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} 
                            />
                            <input 
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div className="formRow">
                            <input 
                                type="time"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>

                        <button className="saveEvent" onClick={handleSaveAndClose}>
                            Save Event
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}