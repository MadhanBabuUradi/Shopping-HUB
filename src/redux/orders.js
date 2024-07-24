import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        value: []
    },
    reducers: {
        addOrder: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;