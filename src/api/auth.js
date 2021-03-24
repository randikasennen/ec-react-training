import api from './api';

export async function signin(email, password) {
    return api.post('/signin', { email, password })
       .then(response => {
            if(response.status === 200) {
                const authUser = { email, accessToken: response.data.accessToken }
                localStorage.setItem('authUser', JSON.stringify(authUser));
                return true;
            }
            return -1;
       })
       .catch(() => { return -1 });
}

export function loadAuthUser() {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser;
}