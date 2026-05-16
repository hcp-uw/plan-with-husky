import huskySprite from "../../assets/husky.png"
import styles from "./HuskyPet.module.css";

export default function HuskyPet() {
    return (
        <img src={huskySprite} className={styles.husky}></img>
    );
}