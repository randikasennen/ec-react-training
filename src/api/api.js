import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'content-type': 'application/json',
    }
})

export default api;