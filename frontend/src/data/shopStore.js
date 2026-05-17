const STORAGE_KEY = "store";

const savedItems = localStorage.getItem(STORAGE_KEY);

let storeItems = savedItems
    ? JSON.parse(savedItems)
    : [
        {
            id: 1,
            price: 10,
            type: "floor",
            name: "dorm carpet",
            asset: "placeholder",
            bought: false,
            equipped: false
        },
        {
            id: 2,
            price: 5,
            type: "hat",
            name: "santa hat",
            asset: "placeholder",
            bought: false,
            equipped: false
        }
    ];

let nextId = 3;

function saveItems() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storeItems))
}

export const storeDB = {
    getAll: () => {
        return storeItems;
    },

    getInventory: () => {
        return storeItems.filter(storeItem => storeItem.bought);
    },

    getEquipped: () => {
        return storeItems.filter(storeItem => storeItem.equipped);
    },

    buyItem: (id) => {
        storeItems = storeItems.map(storeItem =>
            storeItem.id === id
                ? { ...storeItem, bought: true }
                : storeItem
        );
        saveTasks();
    },

    toggleEquip: (id) => {
        storeItems = storeItems.map(storeItem =>
            storeItem.id === id
                ? { ...storeItem, equipped: !storeItem.equipped }
                : storeItem
        );
        saveTasks();
    }
}