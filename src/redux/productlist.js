import { createSlice } from "@reduxjs/toolkit";
import Categories from "../data/database";
export const productlistSlice = createSlice({
    name : "productlist",
    initialState : {
        value : Categories,
    },
    reducers : {
        addProduct : (state,action) => {
            state.value.push(action.payload);
        },
        removeProduct : (state,action) => {
            state.value = state.value.filter((item) => item.id !== action.payload.id);
        },
        updateProduct : (state,action) => {
            state.value = state.value.map((item) => {
                if(item.id === action.payload.id){
                    return action.payload;
                }
                return item;
            });
        },
    },
});
export const {addProduct,removeProduct,updateProduct} = productlistSlice.actions;

export default productlistSlice.reducer;