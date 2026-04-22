import "./WeeklyView.css";

export default function WeeklyViewHeader () {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div>
            <p>Today's date: {today.toLocaleDateString()}, {weekday}</p>
            <div className="week">
                <div className="headerDays">S</div>
                <div className="headerDays">M</div>
                <div className="headerDays">T</div>
                <div className="headerDays">W</div>
                <div className="headerDays">T</div>
                <div className="headerDays">F</div>
                <div className="headerDays">S</div>
            </div>
        </div>
    );
}