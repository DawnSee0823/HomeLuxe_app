import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { setLogout } from '../store/slices/auth';

// import { useTypedDispatch } from '../store/typedHooks';

// const dispatch = useTypedDispatch();

export type ErrorType = {
    message: 'Wrong username or password!';
};

export const urlApi = {
    prod: '',
};

const api = axios.create({
    baseURL: urlApi.prod,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = await EncryptedStorage.getItem('token');
        if (token) {
            try {
                config.headers.Authorization = `Bearer ${token}`;
            } catch (e) {
                console.log('api token error', e);
                config.headers.Authorization = null;
            }
        }

        return config;
    },
    (error) => {
        console.log('request error', error);
        throw error;
    },
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalConfig = error.config;
        // const access = await localStorage.getItemFromPattern('token');
        const refreshToken = await EncryptedStorage.getItem('refresh');
        if (originalConfig.url === '/users/create') {
            throw error.response;
        }
        else {
            if (originalConfig.url !== '/auth' && error.response) {
                if (error.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        // const token = secureItem ? `Bearer ${secureItem}` : null;
                        const token = refreshToken || null;
                        // Prod ---
                        const response = await axios.post('', {
                            grant_type: 'refresh_token',
                            refresh_token: token,
                        });
                        await EncryptedStorage.setItem('token', response.data.access_token);
                        await EncryptedStorage.setItem('refresh', response.data.refresh_token);

                        api.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;

                        return await api(originalConfig);
                    } catch (e) {
                        await EncryptedStorage.removeItem('token');
                        await EncryptedStorage.removeItem('refresh');

                        console.warn('Interceptor response API error', e);
                        setLogout()
                    }
                } else {
                    console.log('Refresh token ERROR', error);
                    throw error.response;
                }
            }
        }

        throw error.response.data;
    },
);

export default api;
