import { useState } from "react";
import styles from "./InventoryItem.module.css";
import placeholder from "../../assets/placeholder.png"
import coin from "../../assets/pwh_coin.png"

// A singular shop item.
export default function InventoryItem(props) {
  const [type, setType] = useState(props.type);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={placeholder}></img>
      </div>
    </>
  );
};