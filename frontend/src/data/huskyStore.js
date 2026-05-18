const STORAGE_KEY = "husky";

const defaultHusky = {
    name: "Dubs",
    mood: 100,
    hunger: 100,
    energy: 100,
    xp: 0,
    level: 1,
    balance: 100
};

function loadHusky() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};

    return {
        ...defaultHusky,
        ...parsed
    };
}

let husky = loadHusky();

function saveStatus() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(husky))
}

export const huskyDB = {
    getStats: () => husky,

    addXP: (amount) => {
        husky.xp += amount;

        if (husky.xp >= husky.level * 100) {
            husky.xp = 0;
            husky.level += 1;
            husky.mood = Math.min(husky.mood + 20, 100);
        }

        saveStatus();
    },

    addMood: (amount) => {
        husky.mood = Math.min(husky.mood + amount, 100);
        saveStatus();
    },

    addHunger: (amount) => {
        husky.hunger = Math.min(husky.hunger + amount, 100);
        saveStatus();
    },

    addEnergy: (amount) => {
        husky.energy = Math.min(husky.energy + amount, 100);
        saveStatus();
    },

    addCoins: (amount) => {
        husky.balance = Math.min(husky.balance + amount, 10000);
        saveStatus();
    },

    loseCoins: (amount) => {
        husky.balance -= amount;
        saveStatus();
    },

    decay: () => {
        husky.mood = Math.max(husky.mood - 1, 0);
        husky.hunger = Math.max(husky.hunger - 1, 0);
        husky.energy = Math.max(husky.energy - 1, 0);
        saveStatus();
    }
};