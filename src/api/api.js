import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3004',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

const handleOnRequest = (config) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));

    if(authUser) {
        config.headers = {
            'Authorization': 'Bearer ' + authUser.accessToken,
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    return config;
}

const handleOnResponse = async (error) => {
    const originalRequest = error.config;

    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const response = await api.put('/refresh', {});
        const refreshToken = response.data.accessToken;

        var authUser = JSON.parse(localStorage.getItem('authUser'));
        authUser.accessToken = refreshToken;
        localStorage.setItem('authUser', JSON.stringify(authUser));

        api.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken;

        return api(originalRequest);
    }

    return Promise.reject(error);
}

api.interceptors.request.use(handleOnRequest, (error) => { return Promise.reject(error) });
api.interceptors.response.use((response) => { return response }, handleOnResponse);

export default api;