import { useState, useEffect } from "react";

import huskySprite from "../../assets/husky.png"
import styles from "./HuskyPet.module.css";

export default function HuskyPet() {
    const [sprite, setSprite] = useState("sprite-husky-idle-neutral");
    const [idleSprite, setIdleSprite] = useState("sprite-husky-idle-neutral");

    useEffect(() => {
        const handleEvent = (event) => {
            const action = event.detail;
            if (action === "play") {
                setSprite("sprite-husky-play");
            }
            if (action === "eat") {
                setSprite("sprite-husky-eat-1");
            }
            if (action === "sleep") {
                setSprite("sprite-husky-sleep");
            }
            if (action === "cheer") {
                setSprite("sprite-husky-cheer");
            }
            setTimeout(() => {
                setSprite(idleSprite);
            }, 1000);
        }

        const handleIdle = (event) => {
            const state = event.detail;
            if (state == "happy") {
                setIdleSprite("sprite-husky-idle-happy");
            }
            if (state === "neutral") {
                setIdleSprite("sprite-husky-idle-neutral");
            }
            if (state === "tired") {
                setIdleSprite("sprite-husky-idle-tired")
            }
            if (state === "sad") {
                setIdleSprite("sprite-husky-idle-sad");
            }
            if (state == "tired sad") {
                setIdleSprite("sprite-husky-idle-sad-and-tired");
            }
            if (state == "hungry") {
                setIdleSprite("sprite-husky-idle-hungry");
            }
            if (state == "dead") {
                setIdleSprite("sprite-husky-DEAD");
            }
        }

        window.addEventListener("huskyAction", handleEvent);
        window.addEventListener("huskyState", handleIdle);

        return () => {
            window.removeEventListener("huskyAction", handleEvent);
            window.removeEventListener("huskyState", handleIdle);
        }
    }, []);

    return (
        <div className={styles.husky}>
            <div
                className={`
                    ${styles.sprite}
                    ${styles[sprite]}
                `}
            />
        </div>
    );
}