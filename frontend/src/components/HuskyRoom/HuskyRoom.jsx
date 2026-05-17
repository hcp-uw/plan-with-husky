import { useState, useEffect } from "react";
import huskySprite from "../../assets/husky.png"
import HuskyPet from "../HuskyPet/HuskyPet"
import styles from "./HuskyRoom.module.css";

import { huskyService } from "../../services/huskyService";

async function playBtn() {
  await huskyService.addMood(10);
  window.dispatchEvent(new CustomEvent("huskyUpdated"));
}

async function feedBtn() {
  await huskyService.addHunger(10);
  window.dispatchEvent(new CustomEvent("huskyUpdated"));
}

async function sleepBtn() {
  await huskyService.addEnergy(10);
  window.dispatchEvent(new CustomEvent("huskyUpdated"));
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