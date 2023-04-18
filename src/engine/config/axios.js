// Core
import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:3004/",
    headers: {
        "Content-Type": "application/json",
    }
});

export const api = {
    getDestinations(params) {
        return instance.get("destinations", { params });
    },
    getHotels(params) {
        return instance.get("hotels", { params });
    },
};

export default api;