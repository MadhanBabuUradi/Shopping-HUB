import { createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState: {
        value: 0,
    },
    reducers: {
        setTotalPrice: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTotalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;