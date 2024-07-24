import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;