import { createAsyncThunk } from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import api, { ErrorType } from '../api';

export const routes = {
    login: '/auth',
    register: '/users/create',
    reset: '/users/reset',
    refresh: '/auth/refresh',
    forgot: '/external/resetUser',
};

export type Refresh = {
    refresh_token: string;
    grant_type: string;
};

export type UsersMessage = {
    message: string;
};

type LoginUserType = {
    username: string;
    password: string;
};

type RegisterUserType = {
    username: string;
    password: string;
    email: string;
    operatorName?: string;
    template: string;
};

export type AxiosResponseLogin = {
    username: string;
    id: string;
    roles: string[];
    expire_in: number;
    access_token: string;
    refresh_token: string;
    token_type: string;
    deposit_access: boolean;
    support_access: boolean;
    running_text: string;
    email: string,
    phone: string
};

export const loginUser = createAsyncThunk<
    AxiosResponseLogin,
    LoginUserType,
    {
        rejectValue: ErrorType;
    }
>('auth/loginUser', async (loginData, { rejectWithValue }) => {
    try {
        const response = await api.post(`${routes.login}`, loginData);
        await EncryptedStorage.setItem('token', response.data.access_token);
        await EncryptedStorage.setItem('refresh', response.data.refresh_token);
        return response.data;
    } catch (err: any) {
        console.log(err);

        return rejectWithValue({
            message: err.message,
        } as ErrorType);
    }
});

export const registerUser = createAsyncThunk<
    UsersMessage,
    RegisterUserType,
    {
        rejectValue: ErrorType;
    }
>('users/createUser', async (registerData, { rejectWithValue }) => {
    try {
        const response = await api.post(`${routes.register}`, registerData);
        return response.data;
    } catch (e: any) {
        return rejectWithValue({
            message: e.message,
        });
    }
});

export const getRefreshToken = createAsyncThunk<
    AxiosResponseLogin,
    Refresh,
    {
        rejectValue: ErrorType;
    }
>('auth/refresh', async (refresh, { rejectWithValue }) => {
    try {
        const response = await api.post(`${routes.refresh}`, refresh);
        return response.data;
    } catch (e: any) {
        return rejectWithValue({
            message: e.message,
        } as ErrorType);
    }
});