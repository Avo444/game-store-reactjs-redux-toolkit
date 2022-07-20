import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsOnCart: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            state.itemsOnCart.push(action.payload);
        },
        removeItemInCart: (state, action) => {
            state.itemsOnCart = state.itemsOnCart.filter(item => item.id !== action.payload);
        }
    }
});

export const { addItemInCart, removeItemInCart } = cartSlice.actions;

export default cartSlice.reducer;