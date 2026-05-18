import { huskyDB } from "../data/huskyStore";

export const huskyService = {
    getStats: () => huskyDB.getStats(),

    addXP: (amount) => huskyDB.addXP(amount),

    addMood: (amount) => huskyDB.addMood(amount),

    addHunger: (amount) => huskyDB.addHunger(amount),

    addEnergy: (amount) => huskyDB.addEnergy(amount),

    addCoins: (amount) => huskyDB.addCoins(amount),

    loseCoins: async (amount) => {
        const stats = await huskyDB.getStats();

        if (amount <= stats.balance) {
            return huskyDB.loseCoins(amount);
        }

        return false;
    },

    decay: () => huskyDB.decay(),
}