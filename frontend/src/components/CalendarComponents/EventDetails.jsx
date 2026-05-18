import { useState } from "react";
import { differenceInMinutes } from 'date-fns';

import "./EventDetails.css";

export default function ({ event, onClose, onSave, onDelete }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState(
        event.dateTime.getFullYear() + "-" +
        String(event.dateTime.getMonth() + 1).padStart(2, "0") + "-" +
        String(event.dateTime.getDate()).padStart(2, "0")
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
        const 
        safeName = name.trim() || event.name;

        const updatedDateTime = new Date(`${date}T${time}`);
        const updatedEndDateTime = endTime
            ? new Date(`${date}T${endTime}`)
            : new Date(updatedDateTime.getTime() + 30 * 60000);

        if (isNaN(updatedDateTime) || isNaN(updatedEndDateTime)) {
            alert("Invalid Date or Time");
            return;
        }

        if (updatedEndDateTime.getTime() < updatedDateTime.getTime()) {
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
                {isEditing ? (
                    <>
                        <div className="modalHeader">
                            <h2>Edit event</h2>
                            <button className="edit-button" onClick={() => setIsEditing(false)}>✎</button>
                            <button className="close-button" onClick={onClose}>X</button>
                        </div>
                        <div className="event-information">
                            <div className="formRow">
                                <input
                                    value={name}
                                    placeHolder={event.name}
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
                                    placeholder={"Category"}
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
                            <button className="save-button" onClick={handleSave}>
                                Save changes
                            </button>
                        </div>     
                    </>
                ) : (
                    <>
                        <div className="modalHeader">
                            <h2>View event</h2>
                            <button className="edit-button" onClick={() => setIsEditing(true)}>✎</button>
                            <button className="delete-button" onClick={() => onDelete(event.id)}> Delete </button>
                            <button className="close-button" onClick={onClose}>X</button>
                        </div>  
                        <div className="eventView">
                            <div className="eventName">{event.name}</div>
                            <div className="eventRow">
                                <span>Date</span>
                                <span>{event.dateTime.toDateString()}</span>
                            </div>

                            <div className="eventRow">
                                <span>Start</span>
                                <span>
                                    {event.dateTime.toLocaleTimeString([], {
                                        hour: "numeric",
                                        minute: "2-digit"
                                    })}
                                </span>
                            </div>
                            <div className="eventRow">
                                <span>End</span>
                                <span>
                                    {event.endDateTime.toLocaleTimeString([], {
                                        hour: "numeric",
                                        minute: "2-digit"
                                    })}
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}