import { useState } from "react";

import "./Home.css";
import MyHusky from "../components/MyHusky";
import Task from "../components/Task";

export default function Home() {
  let name = "John Doe";

  const [tasks, setTasks] = useState([]);
  const addTask = (props) => {
    const newTask = {
      desc: "Task",
      date: "2/23",
      categ: "Homework",
      points: 5,
    };

    setTasks([...tasks, newTask]);
  };

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
          <div className="tasks">
            {tasks.map((task, index) => (
              <Task
                key={index}
                desc={task.desc}
                date={task.date}
                categ={task.categ}
                points={task.points}
              />
            ))}
          </div>
          <button className="addButton" onClick={addTask}>
            +
          </button>
        </div>
      </div>
    </>
  );
}