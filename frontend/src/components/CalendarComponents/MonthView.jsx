import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from "date-fns";
import "./MonthView.css";

export default function MonthView({ currentDate, events, setSelectedEvent }) {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);

    const days = eachDayOfInterval({
        start: monthStart,
        end: monthEnd
    });

    return (
        <div className="month-grid">
            {days.map(day => (
                <div key={day.getTime()} className="month-cell">
                    <div className="date-number">
                        {day.getDate()}
                    </div>

                    {events
                        .filter(e => isSameDay(e.dateTime, day))
                        .map(event => (
                            <div    
                                key={event.id}
                                className="month-event"
                                onClick={() => setSelectedEvent(event)}
                            >
                                {event.name}
                            </div>
                        ))
                    }
                </div>
                
            ))}
        </div>
    );
}