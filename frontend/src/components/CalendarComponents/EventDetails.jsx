import { useState } from "react";
import { differenceInMinutes } from 'date-fns';

import "./EventDetails.css";

export default function ({ event, onClose, onSave }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState(
        event.dateTime.toISOString().split("T")[0]
    );
    const [category, setCategory] = useState(event.category);
    const [time, setTime] = useState(
        event.dateTime.toTimeString().slice(0, 5)
    );
    const [endTime, setEndTime] = useState(
        event.endDateTime.toTimeString().slice(0, 5)
    );

    const [isEditing, setIsEditing] = useState(false);

    function handleSave() {
        const safeName = name.trim() || event.name;

        const updatedDateTime = new Date(`${date}T${time}`);
        const updatedEndDateTime = endTime
            ? new Date(`${date}T${endTime}`)
            : new Date(updatedDateTime.getTime() + 30 * 60000);

        if (isNaN(updatedDateTime) || isNaN(updatedEndDateTime)) {
            alert("Invalid Date or Time");
            return;
        }

        if (updatedEndDateTime < updatedDateTime) {
            alert("End time should not be before start time.");
            return;
        }

        const duration = differenceInMinutes(updatedEndDateTime, updatedDateTime);

        const updatedEvent = {
            ...event,
            name: safeName, 
            dateTime: updatedDateTime,
            endDateTime: updatedEndDateTime,
            duration,
            category
        };

        onSave(updatedEvent);
        console.log(updatedEvent);
        onClose();
    }


    return (
        <div className="screen-overlay" onClick={onClose}>
            <div className="screen-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose}>X</button>
                {isEditing ? (
                    <>
                        <h2>Edit event</h2>
                        <button onClick={() => setIsEditing(false)}>"pencil"</button>
                        <p>Name:</p>
                        <input
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
                        <button className="save-button" onClick={handleSave}>
                            Save changes
                        </button>
                    </>
                ) : (
                    <>
                        <h2>View event</h2>
                        <button onClick={() => setIsEditing(true)}>"pencil"</button>
                        <p>{event.name}</p>
                        <p>{event.dateTime.getDate()}</p>
                        <p>
                            {event.dateTime.toLocaleTimeString([], {
                                hour:"numeric",
                                minute:"2-digit"
                            })}
                        </p>
                        <p>
                            {event.endDateTime.toLocaleTimeString([], {
                                hour:"numeric",
                                minute:"2-digit"
                            })}
                        </p>
                    </>
                )}
                {
                    /*
                <div>
                    
                </div>
                <p>{event.dateTime.getDate()}</p>
                <p>
                    {event.dateTime.toLocaleTimeString([], {
                        hour:"numeric",
                        minute:"2-digit"
                    })}
                </p>
                <p>
                    {event.endDateTime.toLocaleTimeString([], {
                        hour:"numeric",
                        minute:"2-digit"
                    })}
                </p>

                <button className="save-button" onClick={handleSave}>
                    Save changes
                </button>
                
                */}
            </div>
        </div>
    );
}