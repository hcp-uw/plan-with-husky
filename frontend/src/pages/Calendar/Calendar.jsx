import { useState } from "react";
import { startOfWeek, addDays, format, isSameDay } from "date-fns";

import "./Calendar.css";
import "../../pages/Home/Home.css";

import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import MyHusky from "../../components/MyHusky";

import "../../components/CalendarComponents/WeeklyView.css";
import WeeklyViewHeader from "../../components/CalendarComponents/WeeklyViewHeader";
import EventAdder from "../../components/CalendarComponents/EventAdder";
import EventDetails from "../../components/CalendarComponents/EventDetails";
import WeekView from "../../components/CalendarComponents/WeekView";
import MonthView from "../../components/CalendarComponents/MonthView";

export default function Calendar () {
    const today = new Date();
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const weekStart = startOfWeek(currentWeek);
    const days = Array.from({ length: 7 }, (_, i) =>
        addDays(weekStart, i)
    );
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const [events, setEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [view, setView] = useState("week");

    function addEvent(newEvent) {
        setEvents([...events, newEvent]);
    }

    function openPopup() {
        setShowPopup(true);
    }

    function handleEditEvent(updatedEvent) {
        setEvents(events.map(event =>
            event.id == selectedEvent.id
                ? updatedEvent
                : event
        ))
        
        setSelectedEvent(updatedEvent);
    }

    function handlePrevWeek() {
        setCurrentWeek(
            new Date(
                currentWeek.getTime() - 7 * 24 * 60 * 60 * 1000
            )
        );
    }

    function handleNextWeek() {
        setCurrentWeek(
            new Date(
                currentWeek.getTime() + 7 * 24 * 60 * 60 * 1000
            )
        );
    }

    function handlePrevMonth() {
        setCurrentDate(
            new Date(currentDate.setMonth(currentDate.getMonth() - 1))
        );
    }

    function handleNextMonth() {
        setCurrentDate(
            new Date(currentDate.setMonth(currentDate.getMonth() + 1))
        );
    }

    function handleDeleteEvent(id) {
        setEvents(events.filter(event => event.id !== id));
        setSelectedEvent(null);
    }

    return (
        <div className="parent">
            <NavigationBar />
            <div className="title">
                <h1>Welcome back, John Doe!</h1> {/*temporarily changed this to just be john doe, will figure out const transferring later.*/}
            </div>
            <div className="menu">
                <SideBar />
            </div>
            <div className="husky">
                <MyHusky />
            </div>
            <div className="content">
                <div className="calendar-wrapper">
                    <WeeklyViewHeader 
                        onAddClick={openPopup}
                        currentWeek={currentWeek}
                        currentDate={currentDate}
                        onPrevWeek={handlePrevWeek}
                        onNextWeek={handleNextWeek}
                        onPrevMonth={handlePrevMonth}
                        onNextMonth={handleNextMonth}
                        days={days}
                        view={view}
                        setView={setView}
                    />
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
                            onDelete={handleDeleteEvent}
                        />
                    )}
                    {view === "week" ? (
                        <WeekView 
                            events={events}
                            days={days}
                            hours={hours}
                            setSelectedEvent={setSelectedEvent}
                        />
                    ) : (
                        <MonthView 
                            currentDate={currentDate}
                            events={events} 
                            setSelectedEvent={setSelectedEvent}
                        />
                    )} 
                </div>
            </div>
        </div>
    );
}