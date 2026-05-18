import "./WeeklyView.css";

export default function WeeklyViewHeader({ onAddClick, currentWeek, currentDate, onPrevWeek, onNextWeek, onPrevMonth, onNextMonth, days, view, setView }) {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div>
            <div className="topRow"> 
                <h1 className="calendar-title">
                    Calendar
                </h1>

                <div className="headerButtons">
                    <button className="addEventButton" onClick={onAddClick}>+ New Event</button>
                    <button onClick={view === "week" ? onPrevWeek : onPrevMonth} className="arrow-button">
                        ←
                    </button>
                    <p className="monthInArrows">
                        {view === "week" 
                            ? currentWeek.toLocaleDateString([], {
                                month: "long",
                                year: "numeric"
                            })
                            : currentDate.toLocaleDateString([], {
                                month: "long",
                                year: "numeric"
                            })
                        
                        }
                        
                    </p>
                    <button onClick={view === "week" ? onNextWeek : onNextMonth} className="arrow-button">
                        →
                    </button>
                    <button onClick={() => setView(view === "week" ? "month" : "week")} className="view-button">
                        {view === "week" ? "Monthly view" : "Weekly view"}
                    </button>
                </div>  
            </div>
            <p className="headerDate">
                {today.toLocaleTimeString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                })
                    
                }
            </p>
            <div className="week">
                <div className="timeSpacer" />

                {view === "week" && (
                    days.map((day) => (
                    <div key={day.toISOString()} className="headerDays">
                        <p>
                            {day.toLocaleDateString("en-US", {
                                weekday: "short"
                            })}
                            {" "}
                            {day.getDate()}
                        </p>
                    </div>
                )))}

                <div className="scrollbarSpacer" />
            </div>
        </div>
    );
}