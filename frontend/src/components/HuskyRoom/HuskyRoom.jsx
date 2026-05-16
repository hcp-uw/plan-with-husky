import { useState, useEffect } from "react";
import huskySprite from "../../assets/husky.png"
import HuskyPet from "../HuskyPet/HuskyPet"
import styles from "./HuskyRoom.module.css";

import { huskyService } from "../../services/huskyService";

function playBtn() {
  huskyService.addMood(10);
  const updatedStats = huskyService.getStats();
  setMood(updatedStats.mood);
}

function feedBtn() {
  huskyService.addHunger(10);
  const updatedStats = huskyService.getStats();
  setHunger(updatedStats.hunger);
}

function sleepBtn() {
  huskyService.addEnergy(10);
  const updatedStats = huskyService.getStats();
  setEnergy(updatedStats.energy);
}

export default function HuskyRoom() {
  return (
    <div className={styles.scene}>

      <div className={styles["background-layer"]}>
        <div className={styles.wall} />
        <div className={styles.floor} />
      </div>

      <div className={styles["entity-layer"]}>
        <div className={styles.husky}>
          <HuskyPet />
        </div>
      </div>

      <div className={styles["ui-layer"]}>
        <button onClick={() => playBtn()} className={styles["play-btn"]}>Play</button>
        <button onClick={() => feedBtn()} className={styles["feed-btn"]}>Feed</button>
        <button onClick={() => sleepBtn()} className={styles["sleep-btn"]}>Sleep</button>
      </div>

    </div>
  );
}