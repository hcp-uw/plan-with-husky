import { useState } from "react";
import "./App.css";
import MyHusky from "./components/MyHusky";
import Task from "./components/Task";

function App() {
  let name = "John Doe";

  return (
    <>
      <div class="parent">
        <div class="navigation">
          <div>Plan With Husky</div>
          <div class="buttons">
            <button>Home</button>
            <button>Notifications</button>
            <button>Settings</button>
            <button id="profile-button">Your Profile</button>
          </div>
        </div>
        <div class="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <div class="menu">
          <div>todo</div>
          <div>calendar</div>
          <div>my husky</div>
          <div>shop</div>
        </div>
        <div class="husky">
          <MyHusky />
        </div>
        <div class="content">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
      <div class="footer">footer</div>
    </>
  );
}

export default App;
