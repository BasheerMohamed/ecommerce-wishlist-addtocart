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
            const { id, selectedSize } = action.payload;
          
            // Check if the same product with the same size exists
            const item = state.cart.find(
              (i) => i.id === id && i.selectedSize === selectedSize
            );
          
            if (item) {
              // Same product with the same size found; increment quantity
              item.quantity += 1;
            } else {
              // Either new product or same product with a different size
              state.cart.push({ ...action.payload, quantity: 1, selectedSize });
              state.cartCount += 1; // Increment cart item count
            }
          
            // Update the total price
            state.total += action.payload.price;
          },
          removeCart: (state, action) => {
            // Find the item in the cart
            const itemIndex = state.cart.findIndex((i) => i.id === action.payload.id && i.selectedSize === action.payload.selectedSize);

            if (itemIndex !== -1) {
                // Adjust the total price before removing the item
                const item = state.cart[itemIndex];
                state.total -= item.quantity * item.price;
                state.cart.splice(itemIndex, 1); // Remove the item
                state.cartCount -= 1; // Decrease cart count
            }
        },
        updateQuantity: (state, action) => {
            const item = state.cart.find((i) => i.id === action.payload.id && i.selectedSize === action.payload.selectedSize);
            if (item) {
                const oldQuantity = item.quantity;
                const newQuantity = action.payload.newQuantity;
                const priceDifference = (newQuantity - oldQuantity) * item.price;
                item.quantity = newQuantity; // Update quantity
                state.total += priceDifference; // Update total price
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
            // Find the item by ID
            const itemIndex = state.wishlist.findIndex((i) => i.id === action.payload.id);

            // If the item exists in the wishlist, remove it
            if (itemIndex !== -1) {
                state.wishlist.splice(itemIndex, 1);
                state.wishlistCount -= 1; // Decrement wishlist count
            }
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