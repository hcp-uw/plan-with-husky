import { useState } from "react";
import "./TaskScreen.css";
import Task from "./Task"

export default function TaskScreen ({ onAddTask, onClose }) {
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [categ, setCateg] = useState("");
    const [points, setPoints] = useState("");

    return (
        <>
            <div className="screen-overlay" onClick={onClose}>
                <div className="screen-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modalHeader">
                        <h2>Task Screen</h2>
                        <button className="close-button" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className="task-information">
                        <input placeholder="Task name" 
                            value={desc}
                            onChange={(event) => setDesc(event.target.value)}
                        />
                        <input placeholder="Date" 
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <input placeholder="Category" 
                            value={categ}
                            onChange={(event) => setCateg(event.target.value)}
                        />
                        <input placeholder="Points" 
                            value={points}
                            onChange={(event) => setPoints(event.target.value)}
                        />
                        <button onClick={() => onAddTask({ id: crypto.randomUUID(), desc, date, categ, points})} className="taskAddButton">Add task</button>
                    </div>
                </div>
            </div>
        </>
    );
}