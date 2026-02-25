import { useState } from "react";
import styles from "./TaskScreen.css";

export default function TaskScreen ({ onClose }) {

    /*
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
    */

    return (
        <>
            <div className="screen-overlay">
                <div className="screen-content">
                    <h2>Task Screen</h2>
                    <button onClick={onClose}>CLose</button>
                </div>
            </div>
        </>
    );
}