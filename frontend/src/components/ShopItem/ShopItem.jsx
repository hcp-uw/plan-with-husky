import { useState } from "react";
import styles from "./ShopItem.module.css";
import placeholder from "../../assets/placeholder.png"
import coin from "../../assets/pwh_coin.png"
import ShopScreen from "../ShopScreen/ShopScreen"

import { shopService } from "../../services/shopService"

// A singular shop item.
export default function ShopItem(props) {
  const id = props.id;
  const type = props.type;
  const price = props.price;
  const [bought, setBought] = useState(props.bought);
  const [equipped, setEquipped] = useState(props.equipped);
  const [showShopScreen, setShowShopScreen] = useState(false);
  const asset = props.asset ?? placeholder;

  return (
    <>
      <div className={styles.container} style={{ backgroundColor: bought ? "#8C5FCC" : "white" }}>
        <img className={styles.image} src={asset}></img>
        <button className={styles.price} onClick={() => setShowShopScreen(true)}>
          <img className={styles.coin} src={coin} /> {price}
        </button>
        {showShopScreen && (
          <ShopScreen
            id={id}
            price={price}
            onClose={() => setShowShopScreen(false)}
            onBuy={() => setBought(true)}
          />
        )}
      </div>
    </>
  );
};
