import { taskDB } from "../data/taskStore";

export const taskService = {
    getTasks: async () => {
        return taskDB.getAll();
    },

    createTask: async (task) => {
        return taskDB.create(task);
    },

    removeTask: async (task) => {
        return taskDB.remove(task);
    }
};