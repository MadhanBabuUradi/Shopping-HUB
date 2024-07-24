import { createSlice } from "@reduxjs/toolkit";

export const priceFilterSlice = createSlice({
    name: "priceFilter",
    initialState: {
      value: 10000,
    },
    reducers: {
      addPrice: (state, action) => {
        state.value=action.payload;
      },
      clearPrice: (state) => {
        state.value = 1000;
      }
    },
  });
 export const {addPrice,clearPrice} = priceFilterSlice.actions;
 export default priceFilterSlice.reducer;