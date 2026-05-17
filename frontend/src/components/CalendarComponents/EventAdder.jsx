import { useState } from "react";
import { differenceInMinutes } from 'date-fns';

import "./EventAdder.css";

export default function EventAdder ({ onClose, onSave }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [endTime, setEndTime] = useState("");

    function handleSaveAndClose() {
        const curr = new Date();
        const safeName = name.trim() || "(No name)";

        const safeDate = date || curr.toISOString().split("T")[0];
        const safeTime = time || curr.toTimeString().slice(0, 5);


        const dateTime = new Date(`${safeDate}T${safeTime}`);

        const endDateTime = endTime
        ? new Date(`${safeDate}T${endTime}`)
        : new Date(dateTime.getTime() + 30 * 60000);

        if (endDateTime < dateTime) {
            alert("End time should not be before start time.")
            return;
        }

        const duration = differenceInMinutes(endDateTime, dateTime);
        
        const event = {
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
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                    <h2>Event Screen</h2>
                    <div className="event-information">
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
                        <input 
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />

                        <button onClick={handleSaveAndClose}>
                            Save Event
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}