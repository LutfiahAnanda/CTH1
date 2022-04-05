import { createSlice } from '@redux.js/toolkit';

expport const authSlice = CreateSlice({
    name: 'auth',
    initialState: {
        accessToken: '',
        IsAutorized: false,
    },
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload;
            state.isAuthorized = true;
        }
    }
});

export const { login } = authSlice.action;

export default authSlice.reducer;
