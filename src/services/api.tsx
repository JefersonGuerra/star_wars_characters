import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_BASE_URL ?? "https://swapi.dev/api/people"
});

export default api;