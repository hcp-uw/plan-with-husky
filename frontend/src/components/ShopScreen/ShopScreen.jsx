import { useState } from "react";
import coin from "../../assets/pwh_coin.png"
import styles from "./ShopScreen.module.css";

import { shopService } from "../../services/shopService"
import { huskyService } from "../../services/huskyService"

export default function ShopScreen ({ id, onClose, price, onBuy }) {
    async function onYes() {
        console.log("YES CLICK");
        onBuy();
        onClose();
        await shopService.buyItem(id);
        await huskyService.loseCoins(price);
        window.dispatchEvent(new CustomEvent("balanceUpdated"));
    }

    return (
        <>
            <div className={styles.screenOverlay}>
                <div className={styles.screenContent}>
                    <h2>Purchase for <img className={styles.coin} src={coin} />{price}?</h2>
                    <div>
                        <button className={styles.yesButton} onClick={onYes}>
                            Yes
                        </button>
                        <button className={styles.noButton} onClick={onClose}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}