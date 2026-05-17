import { useState, useEffect } from "react";

import "../Home/Home.css";
import styles from "./Shop.module.css";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SideBar from "../../components/SideBar/SideBar";
import MyHusky from "../../components/MyHusky";
import ShopItem from "../../components/ShopItem/ShopItem"

import shopService from "../../services/shopService"

export default function Shop() {
  let name = "John Doe";
  const [shopItems, setShopItems] = useState([]);

  return (
    <>
      <div className="parent">
        <NavigationBar />
        <div className="title">
          <h1>Welcome back, {name}!</h1>
        </div>
        <SideBar />
        <div className="husky">
          <MyHusky />
        </div>
        <div className="content">
            <div className={styles.shop}>
                <ShopItem 
                    price={5}
                    bought={false}/>
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
                <ShopItem />
            </div>
        </div>
      </div>
    </>
  );
}
