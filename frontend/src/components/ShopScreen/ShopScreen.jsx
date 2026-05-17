import { useState } from "react";
import coin from "../../assets/pwh_coin.png"
import styles from "./ShopScreen.module.css";

export default function ShopScreen ({ onClose, price }) {
    return (
        <>
            <div className={styles.screenOverlay}>
                <div className={styles.screenContent}>
                    <h2>Purchase for <img className={styles.coin} src={coin} />{price}?</h2>
                    <div>
                        <button className={styles.yesButton}>
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