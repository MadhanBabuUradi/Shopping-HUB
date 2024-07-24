import { createSlice } from "@reduxjs/toolkit";


export const categoryFilterSlice = createSlice({
    name: "categoryFilter",
    initialState: {
      value: [],
    },
    reducers: {
      addCategory: (state, action) => {
        state.value.push(action.payload);
      },
      removeCategory: (state, action) => {
        state.value = state.value.filter((item) => item !== action.payload);
      },
      updateCategory: (state, action) => {
        state.value = state.value.map((item) => {
          if (item === action.payload) {
            return action.payload;
          }
          return item;
        });
      },
      clearCategory: (state) => {
        state.value = [];
      }
    },
  });
  

export const { addCategory, removeCategory, updateCategory ,clearCategory} =
  categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;
