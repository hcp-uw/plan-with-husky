import { useState } from "react";
import "./Task.css";

// A singular task.
export default function Task(props) {
  const [desc, setDesc] = useState(props.desc);
  const [date, setDate] = useState(props.date);
  const [categ, setCateg] = useState(props.categ);
  const [points, setPoints] = useState(props.points);

  return (
    <>
      <div className="container">
        <div className="check">
          <input
            type="checkbox"
            name="option_name"
            value="option_value"
          ></input>
        </div>
        <div>{desc}</div>
        <div className="right">{categ}</div>
        <div>{date}</div>
        <div>{points}</div>
      </div>
    </>
  );
};
