import "./EventAdder.css";

export default function EventAdder ({ onClose }) {
    return (
        <>
            <div className="screen-overlay">
                <div className="screen-content">
                    <button className="close-button" onClick={onClose}>
                        X
                    </button>
                    <h2>Event Screen</h2>
                    <div className="event-information">
                        <input placeholder="Event name" 
                        />
                        <input placeholder="Date" 
                        />
                        <input placeholder="Category" 
                        />
                        <input placeholder="Time"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}