const STORAGE_KEY = 'tasks';

const savedTasks = localStorage.getItem(STORAGE_KEY);

let tasks = savedTasks
    ? JSON.parse(savedTasks)
    : [
        {
            id: 1,
            desc: "Do homework",
            date: "2026-05-05",
            categ: "School",
            points: 5,
            completed: true
        },
        {
            id: 2,
            desc: "Finish essay",
            date: "2026-05-06",
            categ: "School",
            points: 10,
            completed: false
        }
    ];

let nextId = 3;

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export const taskDB = {
    // GET all tasks
    getAll: () => {
        return tasks;
    },

    // CREATE task
    create: (task) => {
        const newTask = {
            id: nextId++,
            completed: false,
            ...task
        };

        tasks.push(newTask);
        saveTasks();
        return newTask;
    },

    // TOGGLE complete/incomplete
    toggle: (id) => {
        tasks = tasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        );
        saveTasks();
    },

    // DELETE task
    remove: (id) => {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
    }
};