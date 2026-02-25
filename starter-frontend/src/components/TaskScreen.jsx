import { useState } from "react";
import "./TaskScreen.css";
import Task from "./Task"

export default function TaskScreen ({ onClose }) {

    return (
        <>
            <div className="screen-overlay">
                <div className="screen-content">
                    <h2>Task Screen</h2>
                    <button onClick={onClose} style={{color: "white"}}>Add task</button>
                </div>
            </div>
        </>
    );
}