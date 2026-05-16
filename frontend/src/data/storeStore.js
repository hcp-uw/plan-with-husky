let storeItems = [
    {
        id: 1,
        type: "hat",
        name: "santa hat",
        asset: "placeholder",
        bought: false,
        equipped: false
    },
    {
        id: 2,
        type: "floor",
        name: "wooden floor",
        asset: "placeholder",
        bought: true,
        equipped: true
    }
]

export const storeDB = {
    getAll: () => {
        return storeItems;
    }
}