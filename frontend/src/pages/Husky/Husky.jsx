import { useState } from "react";

import "../Home/Home.css";
import styles from "./Husky.module.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";
import Task from "../../components/Task";

export default function Husky() {
  let name = "John Doe";

  return (
    <>
      <div className="parent">
        <NavigationBar />
        <div className="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <SideBar />
        <div style={{ gridColumn: "span 2" }} className="content"></div>
      </div>
    </>
  );
}
