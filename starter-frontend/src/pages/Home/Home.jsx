import { useState } from "react";

import "./Home.css";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";
import Task from "../../components/Task"

export default function Home() {
  let name = "John Doe";

  const [showTaskScreen, setShowTaskScreen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks(tasks => [...tasks, newTask]);
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
          <button className="addButton" onClick={() => setShowTaskScreen(true)}>
            +
          </button>
          {showTaskScreen && (
            <TaskScreen 
              onClose={(newTask) => {
                addTask(newTask);
                setShowTaskScreen(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}