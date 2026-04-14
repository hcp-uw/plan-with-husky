export default function WeeklyViewHeader () {
    const today = new Date();
    const weekday = today.toLocaleDateString("en-US", {
        weekday: "long",
    });

    return (
        <div>
            <p>{today.toLocaleDateString()}, {weekday}</p>
        </div>
    );
}