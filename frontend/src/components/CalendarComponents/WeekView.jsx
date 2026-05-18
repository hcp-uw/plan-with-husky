import { isSameDay } from "date-fns";

export default function WeekView ({ events, days, hours, setSelectedEvent }) {
    const LOCALE = "en-US";
    
    function formatHour(hour) {
        if (hour === 0) return "";
        if (hour < 12 ) return `${hour} AM`;
        if (hour === 12) return "12 PM";
        
        return `${hour - 12} PM`;
    }


    return (
        <div className="calendar">
            {hours.map((hour) => (
                <div className="row" key={hour}>
                    <div className="time">{formatHour(hour)}</div>
                        {days.map((day) => (
                            <div className="cell" key={day.toISOString()} data-hour={hour} data-day={day}>
                                {events
                                    .filter(e => 
                                        e.dateTime.getHours() === hour &&
                                        isSameDay(e.dateTime, day)
                                    )
                                    .map(event => {
                                        const minuteOffset = 
                                            (event.dateTime.getMinutes() / 60) * 40;
                                        const visualDuration =
                                            Math.max(event.duration, 15);
                                        const eventHeight = 
                                            (visualDuration / 60) * 40;
                                        
                                        return (
                                            <div 
                                                key={event.id} 
                                                className="event-item"
                                                onClick={() => setSelectedEvent(event)}
                                                style={{
                                                    position: "absolute",
                                                    top: `${minuteOffset}px`,
                                                    height: `${eventHeight}px`
                                                }}
                                            >
                                                <p className="event-name">{event.name}</p>
                                                <p className="event-time">
                                                    {event.dateTime.toLocaleTimeString(LOCALE, {
                                                        hour: "numeric",
                                                        minute: "2-digit"
                                                    })}{" "}
                                                    -{" "} 
                                                    {event.endDateTime.toLocaleTimeString(LOCALE, {
                                                        hour: "numeric",
                                                        minute: "2-digit"
                                                    })}
                                                </p>
                                            </div>
                                        );
                                    }) 
                                }
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}