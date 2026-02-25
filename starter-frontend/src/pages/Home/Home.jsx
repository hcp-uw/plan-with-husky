import { useState } from "react";

import "./Home.css";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";

export default function Home() {
  let name = "John Doe";

  const [showScreen, setShowScreen] = useState(false);

  return (
    <>
      <div className="parent">
        <div className="navigation">
          <div>Plan With Husky</div>
          <div className="buttons">
            <button>Home</button>
            <button>Notifications</button>
            <button>Settings</button>
            <button id="profile-button">Your Profile</button>
          </div>
        </div>
        <div className="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <div className="menu">
          <div>todo</div>
          <div>calendar</div>
          <div>my husky</div>
          <div>shop</div>
        </div>
        <div className="husky">
          <MyHusky />
        </div>
        <div className="content">
          <button className="addButton" onClick={() => setShowScreen(true)}>
            +
          </button>
          {showScreen && (
            <TaskScreen 
              onClose={() => setShowScreen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}