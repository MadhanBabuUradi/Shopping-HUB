import { createSlice } from "@reduxjs/toolkit";

export const ratingFilterSlice = createSlice({
    name: "ratingFilter",
    initialState: {
      value: "all",
    },
    reducers: {
      addRating: (state, action) => {
        state.value=action.payload;
      },
      clearRating: (state) => {
        state.value = "all";
      }
    },
  });
 export const {addRating,clearRating} = ratingFilterSlice.actions;
 export default ratingFilterSlice.reducer;