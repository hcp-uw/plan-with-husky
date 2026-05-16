import { useState, useEffect } from "react";
import husky from "../assets/husky.png";
import styles from "./MyHusky.module.css";
import cog from "../assets/settings cog.png";
import HuskyPet from "./HuskyPet/HuskyPet"
import coin from "../assets/pwh_coin.png";

import { huskyService } from "../services/huskyService";

function StatusBar({ type, value }) {
  return (
    <>
      <div className={styles.barContainer}>
        {type}
        <div className={styles.barOuter}>
          <div
            className={styles.statusBar}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}

function NameBar() {
  return (
    <div className={styles.nameContainer}>
      <div>
        <strong style={{ fontSize: 20 }}>Dubs</strong>
        <div style={{ fontSize: 12 }}>lvl 5</div>
      </div>
      <img src={cog} className={styles.cog}></img>
    </div>
  );
}

function Balance() {
  return (
    <div className={styles.balanceContainer}>
      <img src={coin} className={styles.coin}></img>
      <div>
        100
      </div>
    </div>
  );
}

const MyHusky = ({isHuskyPage}) => {
  const [mood, setMood] = useState(50);
  const [hunger, setHunger] = useState(50);
  const [energy, setEnergy] = useState(50);

  useEffect(() => {
    const loadStats = async () => {
      const data = await huskyService.getStats();
      setMood(data.mood);
      setHunger(data.hunger);
      setEnergy(data.energy);
    };

    loadStats();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      await huskyService.decay();
      const updated = await huskyService.getStats();
      setMood(updated.mood);
      setHunger(updated.hunger);
      setEnergy(updated.energy);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {!isHuskyPage && (
          <div className={styles.huskySprite}>
            <HuskyPet />
          </div>
          )}
        <div className={styles.help}>
          <NameBar />
          <Balance />
        </div>
        <StatusBar type={"Mood"} value={mood} />
        <StatusBar type={"Hunger"} value={hunger} />
        <StatusBar type={"Energy"} value={energy} />
      </div>
    </>
  );
};

export default MyHusky;
