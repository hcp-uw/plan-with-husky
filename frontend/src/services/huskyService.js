import { huskyDB } from "../data/huskyStore";

export const huskyService = {
    getStats: async () => {
        return huskyDB.getStats();
    },

    addXP: async (amount) => {
        return huskyDB.addXP(amount);
    },

    addMood: async (amount) => {
        return huskyDB.addMood(amount);
    },

    addHunger: async (amount) => {
        return huskyDB.addHunger(amount);
    },

    addEnergy: async (amount) => {
        return huskyDB.addEnergy(amount);
    },

    decay: async () => {
        return huskyDB.decay();
    }
}