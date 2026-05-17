import { useState, useEffect } from "react";

import "../Home/Home.css";
import styles from "./Husky.module.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import TaskScreen from "../../components/TaskScreen";
import Task from "../../components/Task";
import huskySprite from "../../assets/husky.png"
import InventoryItem from "../../components/InventoryItem/InventoryItem"
import HuskyRoom from "../../components/HuskyRoom/HuskyRoom"

import { shopService } from "../../services/shopService"

export default function Husky() {
  let name = "John Doe";
  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    const loadItems = async () => {
      const data = await shopService.getInventory();
      setInventoryItems(data);
    };

    loadItems();
  }, []);

  return (
    <>
      <div className="parent">
        <NavigationBar />
        <div className="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <SideBar />
        <div className="husky">
          <div className={styles.inventory}>
            {inventoryItems.map((item) => (
              <InventoryItem
                key={item.id}
                price={item.price}
                type={item.type}
                name={item.name}
                asset={item.asset}
                equipped={item.equipped}
              />
            ))}
          </div>
          <MyHusky isHuskyPage={true}/>
        </div>
        <div className="content">
          <div className={styles.environment}>
            <HuskyRoom />
          </div>
        </div>
      </div>
    </>
  );
}
