import { useState } from "react";
import styles from "./InventoryItem.module.css";
import placeholder from "../../assets/placeholder.png"
import coin from "../../assets/pwh_coin.png"

// A singular inventory item.
export default function InventoryItem(props) {
  const type = props.type;
    const price = props.price;
    const [bought, setBought] = useState(props.bought);
    const [equipped, setEquipped] = useState(props.equipped);
    const asset = props.asset ?? placeholder;

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={asset}></img>
      </div>
    </>
  );
};