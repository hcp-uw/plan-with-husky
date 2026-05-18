import { shopDB } from "../data/shopStore";

export const shopService = {
    getAll: async () => {
        return shopDB.getAll();
    },

    buyItem: async (id) => {
        return shopDB.buyItem(id);
    },

    getInventory: async () => {
        return shopDB.getInventory();
    }
}