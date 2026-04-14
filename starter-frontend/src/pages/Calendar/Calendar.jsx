import "./Calendar.css";
import WeeklyViewHeader from "../../components/CalendarComponents/WeeklyViewHeader";

import SideBar from "../../components/SideBar/SideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function Calendar () {
    const today = new Date();

    return (
        <>
            <NavigationBar />
            <SideBar />
            <p>Yippe!! Here is calendar text.</p>
            <div>
                <h1>Today's date</h1>
                <p>
                    {today.toLocaleDateString()}
                </p>
            </div>
            <div>
                <WeeklyViewHeader />
            </div>
            <div className="week">
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
                <div className="day"></div>
            </div>
        </>
    );
}