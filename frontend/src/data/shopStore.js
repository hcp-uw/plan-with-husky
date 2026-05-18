import carpet from "../assets/carpet.jpg"
import placeholder from "../assets/placeholder.png"

const STORAGE_KEY = "shop";

const savedItems = localStorage.getItem(STORAGE_KEY);

let shopItems = savedItems
    ? JSON.parse(savedItems)
    : [
        {
            id: 1,
            price: 10,
            type: "floor",
            name: "dorm carpet",
            asset: carpet,
            bought: true,
            equipped: true
        },
        {
            id: 2,
            price: 5,
            type: "hat",
            name: "santa hat",
            asset: placeholder,
            bought: false,
            equipped: false
        }
    ];

let nextId = 3;

function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shopItems))
}

export const shopDB = {
    getAll: () => {
        return shopItems;
    },

    getInventory: () => {
        return shopItems.filter(shopItem => shopItem.bought);
    },

    getEquipped: () => {
        return shopItems.filter(shopItem => shopItem.equipped);
    },

    buyItem: (id) => {
        shopItems = shopItems.map(shopItem =>
            shopItem.id === id
                ? { ...shopItem, bought: !shopItem.bought }
                : shopItem
        );
        saveItems();
        console.log(id);
    },

    toggleEquip: (id) => {
        shopItems = shopItems.map(shopItem =>
            shopItem.id === id
                ? { ...shopItem, equipped: !shopItem.equipped }
                : shopItem
        );
        saveItems();
    }
}