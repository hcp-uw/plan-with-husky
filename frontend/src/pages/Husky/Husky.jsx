import { useState } from "react";

import "../Home/Home.css";
import styles from "./Husky.module.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";
import Task from "../../components/Task";
import huskySprite from "../../assets/husky.png"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import HuskyRoom from "../../components/HuskyRoom/HuskyRoom"

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
        <div className="husky">
          <div className={styles.inventory}>
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </div>
          <MyHusky isHuskyPage={true}/>
        </div>
        <div className="content">
          <div className={styles.environment}>
            <HuskyRoom />
          </div>
        </div>
      </div>
    </>
  );
}
