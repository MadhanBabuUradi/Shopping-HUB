import { createSlice } from "@reduxjs/toolkit";

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        value: {
            "id": 10,
            "name": "Anker Powerbank",
            "description": "High-capacity portable charger",
            "rating": 70,
            "img": "https://static.toiimg.com/thumb/msid-71502001,width-400,resizemode-4/71502001.jpg",
            "price": 40
        }
    },
    reducers: {
        setProductDetail: (state, action) => {
            state.value = action.payload;
        },
        clearProductDetail: (state) => {
            state.value = {
                "id": 10,
                "name": "Anker Powerbank",
                "description": "High-capacity portable charger",
                "rating": 70,
                "img": "https://static.toiimg.com/thumb/msid-71502001,width-400,resizemode-4/71502001.jpg",
                "price": 40
            };
        }
    }
});

export const { setProductDetail, clearProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;