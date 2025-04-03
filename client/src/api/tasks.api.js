import axios from "axios";

const tasksapi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => tasksapi.get();

export const createTask = (task) => tasksapi.post("", task);

