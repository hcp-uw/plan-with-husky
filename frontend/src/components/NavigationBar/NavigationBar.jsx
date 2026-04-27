import "../../pages/Home/Home.css";

export default function NavigationBar () {
    return (
        <div className="navigation">
            <div>Plan With Husky</div>
            <div className="buttons">
            <button>Home</button>
            <button>Notifications</button>
            <button>Settings</button>
            <button id="profile-button">Your Profile</button>
            </div>
        </div>
    );
}