import { createSlice } from "@reduxjs/toolkit";

export const deleteNameSlice = createSlice({
    name: 'deleteName',
    initialState: {
        value: null,
    },
    reducers: {
        setDeleteName: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDeleteName } = deleteNameSlice.actions;
export default deleteNameSlice.reducer;