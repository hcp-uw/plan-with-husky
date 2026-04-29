import "./Calendar.css";
import "../../pages/Home/Home.css";

import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import MyHusky from "../../components/MyHusky";

import "../../components/CalendarComponents/WeeklyView.css";
import WeeklyViewHeader from "../../components/CalendarComponents/WeeklyViewHeader";

export default function Calendar () {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hours = []
    for (let i = 0; i < 24; i++) {
        hours.push(i );
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
                    <WeeklyViewHeader />
                    <div className="calendar">
                        {hours.map((hour) => (
                            <div className="row" key={hour}>
                            <div className="time">{hour}</div>
                                {days.map((day) => (
                                    <div className="cell" key={day} data-hour={hour} data-day={day} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}