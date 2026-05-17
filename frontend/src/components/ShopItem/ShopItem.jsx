import { useState } from "react";
import styles from "./ShopItem.module.css";
import placeholder from "../../assets/placeholder.png"
import coin from "../../assets/pwh_coin.png"
import ShopScreen from "../ShopScreen/ShopScreen"

// A singular shop item.
export default function ShopItem(props) {
  const [type, setType] = useState(props.type);
  const [price, setPrice] = useState(props.price);
  const [bought, setBought] = useState(props.bought);
  const [showShopScreen, setShowShopScreen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={placeholder}></img>
        <button className={styles.price} onClick={() => setShowShopScreen(true)}>
          <img className={styles.coin} src={coin} /> {price}
        </button>
        {showShopScreen && (
          <ShopScreen
            price={price}
            onClose={() => setShowShopScreen(false)}
          />
        )}
      </div>
    </>
  );
};
