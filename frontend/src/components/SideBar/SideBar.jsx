import { useNavigate } from "react-router-dom";

import styles from "./SideBar.module.css";

export default function SideBar () {
    const navigate = useNavigate();

    return (
        <div className={styles.menu}>
            <div>
                <button className={styles.topButton} onClick={() => navigate("/home")}>
                    todo
                </button>
            </div>
            <div>
                <button className = {styles.midButton} onClick={() => navigate("/calendar")}>
                    calendar
                </button>
            </div>
            <div>
                <button className = {styles.midButton} onClick={() => navigate("/myhusky")}>
                    my husky
                </button>
            </div>
            <div>
                <button className={styles.bottomButton} onClick={() => navigate("/shop")}>
                    shop
                </button>
            </div>
        </div>
    );
}