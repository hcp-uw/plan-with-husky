import { useState } from "react";

import "./Calendar.css";
import "../../pages/Home/Home.css";

import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import MyHusky from "../../components/MyHusky";

import "../../components/CalendarComponents/WeeklyView.css";
import WeeklyViewHeader from "../../components/CalendarComponents/WeeklyViewHeader";
import EventAdder from "../../components/CalendarComponents/EventAdder";
import EventDetails from "../../components/CalendarComponents/EventDetails";

export default function Calendar () {
    const today = new Date();
    const days = [0, 1, 2, 3, 4, 5, 6];
    const hours = []
    const LOCALE = "en-US";

    for (let i = 0; i < 24; i++) {
        hours.push(i );
    }

    const [events, setEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function addEvent(newEvent) {
        setEvents([...events, newEvent]);
    }

    function openPopup() {
        setShowPopup(true);
    }

    function formatHour(hour) {
        if (hour === 0) return "";
        if (hour < 12 ) return `${hour} AM`;
        if (hour === 12) return "12 PM";
        
        return `${hour - 12} PM`;
    }

    function handleEditEvent(updatedEvent) {
        setEvents(events.map(event =>
            event == selectedEvent
                ? updatedEvent
                : event
        ))
        
        setSelectedEvent(updatedEvent);
    }

    return (
        <div className="parent">
            <NavigationBar />
            <div className="title">
                <h1>Welcome back, John Doe!</h1> {/*temporarily changed this to just be john doe, will figure out const transferring later.*/}
            </div>
            <SideBar />
            <div className="husky">
                <MyHusky />
            </div>
            <div className="content">
                <div className="calendar-wrapper">
                    <WeeklyViewHeader onAddClick={openPopup}/>
                    {showPopup && (
                        <EventAdder 
                            onClose={() => setShowPopup(false)}
                            onSave={addEvent}
                        />
                    )}
                    {selectedEvent && (
                        <EventDetails
                            event={selectedEvent}
                            onClose={() => setSelectedEvent(null)}
                            onSave={handleEditEvent}
                        />
                    )}
                    <div className="calendar">
                        {hours.map((hour) => (
                            <div className="row" key={hour}>
                                <div className="time">{formatHour(hour)}</div>
                                    {days.map((day) => (
                                        <div className="cell" key={day} data-hour={hour} data-day={day}>
                                            {events
                                                .filter(e => 
                                                    e.dateTime.getHours() === hour &&
                                                    e.dateTime.getDay() === day
                                                )
                                                .map((event, i) => {
                                                    const minuteOffset = 
                                                        (event.dateTime.getMinutes() / 60) * 40;
                                                    const visualDuration =
                                                        Math.max(event.duration, 15);
                                                    const eventHeight = 
                                                        (visualDuration / 60) * 40;
                                                    
                                                    return (
                                                        <div 
                                                            key={i} 
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
                </div>
            </div>
        </div>
    );
}