import { useState } from "react";
import styles from "./Task.module.css";

// A singular task.
const Task = (props) => {
  const [desc, setDesc] = useState(props.desc);
  const [date, setDate] = useState(props.date);
  const [categ, setCateg] = useState(props.categ);
  const [points, setPoints] = useState(props.points);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.check}>
          <input
            type="checkbox"
            name="option_name"
            value="option_value"
          ></input>
        </div>
        <div>{desc}</div>
        <div className={styles.right}>{categ}</div>
        <div>{date}</div>
        <div>{points}</div>
      </div>
    </>
  );
};

export default Task;
