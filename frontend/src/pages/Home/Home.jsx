import { useState, useEffect } from "react";

import "./Home.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";
import Task from "../../components/Task"

import { taskService } from "../../services/taskService";
// OH MY GODDDDDD BRO

export default function Home() {
  let name = "John Doe";

  const [showTaskScreen, setShowTaskScreen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await taskService.getTasks();
      setTasks(data);
    };

    loadTasks();
  }, []);

  const addTask = async (newTask) => {
    await taskService.createTask(newTask);

    const updated = await taskService.getTasks();
    setTasks(updated);
  };

  function deleteTask(id) {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <div className="parent">
        <NavigationBar />
        <div className="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <SideBar />
        <div className="husky">
          <MyHusky />
        </div>
        <div className="content">
          <div className="tasks">
            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                desc={task.desc}
                date={task.date}
                categ={task.categ}
                points={task.points}
                onComplete={deleteTask}
              />
            ))}
          </div>
          <button className="addButton" onClick={() => setShowTaskScreen(true)}>
            +
          </button>
          {showTaskScreen && (
            <TaskScreen 
              onAddTask={async (newTask) => {
                await addTask(newTask);
                setShowTaskScreen(false);
              }}
              onClose={() => 
                setShowTaskScreen(false)
              }
            />
          )}
        </div>
      </div>
    </>
  );
}