import { useState, useEffect } from "react";

import "../Home/Home.css";
import styles from "./Shop.module.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import ShopItem from "../../components/ShopItem/ShopItem"

import { shopService } from "../../services/shopService"

export default function Shop() {
  let name = "John Doe";
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
      const loadItems = async () => {
        const data = await shopService.getAll();
        setShopItems(data);
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
        <div className="menu">
          <SideBar />
        </div>
        <div className="husky">
          <MyHusky />
        </div>
        <div className="content">
            <div className={styles.shop}>
                {shopItems.map((item) => (
                  <ShopItem
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    type={item.type}
                    name={item.name}
                    asset={item.asset}
                    bought={item.bought}
                    equipped={item.equipped}
                  />
                ))}
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </div>
        </div>
      </div>
    </>
  );
}
