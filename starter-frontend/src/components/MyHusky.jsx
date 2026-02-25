import { useState } from "react";
import husky from "../assets/husky.png";
import styles from "./MyHusky.module.css";
import cog from "../assets/settings cog.png";

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

const MyHusky = () => {
  const [mood, setMood] = useState(100);
  const [hunger, setHunger] = useState(75);
  const [energy, setEnergy] = useState(25);
  return (
    <>
      <div className={styles.container}>
        <img className={styles.huskySprite} src={husky}></img>
        <NameBar />
        <StatusBar type={"Mood"} value={mood} />
        <StatusBar type={"Hunger"} value={hunger} />
        <StatusBar type={"Energy"} value={energy} />
      </div>
    </>
  );
};

export default MyHusky;
