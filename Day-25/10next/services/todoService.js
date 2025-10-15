import axios from "axios";

const API_URL = "/api/todos"

export const todoService = {

    getAllTodos: async () => {
        try {
            const response = await axios.get(API_URL)
            return response.data
        } catch (error) {
            throw new Error(
                error.response?.data?.message || `Failed to fetch todos`
            )
        }
    },

    getTodoById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`)
            return response.data
        } catch (error) {
            throw new Error(
                error.response?.data?.message || `Failed to fetch todo with id ${id}`
            )
        }
    }
}