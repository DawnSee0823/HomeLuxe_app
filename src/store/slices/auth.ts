import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { loginUser, AxiosResponseLogin, getRefreshToken, registerUser } from '../../api/auth';

export type InitialStateType = AxiosResponseLogin & {
    isLogin: boolean,
    isRegistered: boolean,
    loading: boolean,
    error: string | null,
}

const initialState = {
    username: '',
    roles: [],
    id: '',
    access_token: '',
    refresh_token: '',
    token_type: '',
    deposit_access: false,
    support_access: false,
    running_text: '',
    expire_in: 0,
    isLogin: false,
    isRegistered: false,
    loading: false,
    error: '',
    email: '',
    phone: ''
};


export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogout: (state) => {
            state.isLogin = false;
            state.isRegistered = false;
            state.username = '';
            state.error = '';
        },
        cleanError: state => {
            state.error = '';
        },
    },
    // extraReducers: (builder: ActionReducerMapBuilder<InitialStateType>) => {
    //     builder.addCase(loginUser.pending, (state) => {
    //         state.loading = true;
    //     });
    //     builder.addCase(loginUser.fulfilled, (state, action) => {
    //         state.isLogin = action.payload.username === "TestPlayer" ? false : true;
    //         state.username = action.payload.username;
    //         state.id = action.payload.id;
    //         state.access_token = action.payload?.access_token;
    //         state.refresh_token = action.payload?.refresh_token;
    //         state.running_text = action.payload.running_text;
    //         state.deposit_access = action.payload.deposit_access;
    //         state.support_access = action.payload.support_access;
    //         state.email = action.payload.email;
    //         state.phone = action.payload.phone;
    //     });
    //     builder.addCase(loginUser.rejected, (state, action) => {
    //         state.loading = false;
    //         if (action.payload)
    //             state.error = action.payload.message;
    //     });
    //     builder.addCase(getRefreshToken.fulfilled, (state, action) => {
    //         state.isLogin = true;
    //         state.id = action.payload.id;
    //         state.access_token = action.payload?.access_token;
    //         state.refresh_token = action.payload?.refresh_token;
    //         state.running_text = action.payload.running_text;
    //         state.username = action.payload.username;
    //         state.deposit_access = action.payload.deposit_access;
    //         state.support_access = action.payload.support_access;
    //         state.email = action.payload.email;
    //         state.phone = action.payload.phone;
    //     })
    //     builder.addCase(registerUser.fulfilled, (state, action) => {
    //         state.isRegistered = true;
    //     })
    // }
});

export const { setLogout, cleanError } = auth.actions;

export default auth.reducer;