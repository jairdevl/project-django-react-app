import axios from "axios";

const tasksapi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/',
})

export const getAllTasks = () => tasksapi.get("/");

export const createTask = (task) => tasksapi.post("/", task);

export const deleteTask = async (id) => {
    try {
        const response = await tasksapi.delete(`/${id}/`);
        return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
};

