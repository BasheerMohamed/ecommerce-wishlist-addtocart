import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    wishlist: [],
    total: 0,
    cartCount: 0,
    wishlistCount: 0,
};

export const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const item = state.cart.find((i) => i.id === action.payload.id);

            if(item) {
                item.quantity += 1;
            } else {
                state.cart.push({...action.payload, quantity: 1, selectSize: action.payload.selectSize});
                state.cartCount += 1;
            }

            state.total += action.payload.price;
        },
        removeCart: (state, action) => {

        },
        updateQuantity: (state, action) => {
            const item = state.cart.find((i) => i.id === action.payload.id);
            if (item) {
                const difference = action.payload.newQuantity - item.quantity;
                state.total += difference * item.price;
                item.quantity = action.payload.newQuantity;
            }
        },
        addWishlist: (state, action) => {
            const item = state.wishlist.find((i) => i.id == action.payload.id);

            if(item) {
                state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);
                state.wishlistCount -= 1;
            } else {
                state.wishlist.push({...action.payload, quantity: 1});
                state.wishlistCount += 1;
            }
        },
        removeWishlist: (state, action) => {
            
        },
    },
});

export const {addCart, removeCart, updateQuantity, addWishlist, removeWishlist} = ecommerceSlice.actions;

export const selectCart = (state) => state.ecommerce.cart;
export const selectWishlist = (state) => state.ecommerce.wishlist;
export const selectTotal = (state) => state.ecommerce.total;
export const selectCartCount = (state) => state.ecommerce.cartCount;
export const selectWishlistCount = (state) => state.ecommerce.wishlistCount;

export default ecommerceSlice.reducer;