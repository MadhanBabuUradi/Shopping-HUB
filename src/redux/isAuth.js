import {createSlice} from '@reduxjs/toolkit';
import { getIsAuthenticatedFromLocalStorage } from '../utils/localStorage';
const initialIsAuthenticated = getIsAuthenticatedFromLocalStorage();

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState: {
        value: initialIsAuthenticated,
    },
    reducers: {
        setAuth: (state, action) => {
        state.value = action.payload;
        },
    },
});

export const {setAuth} = isAuthSlice.actions;
export default isAuthSlice.reducer;