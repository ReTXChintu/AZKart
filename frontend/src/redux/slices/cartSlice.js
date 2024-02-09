import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      return [action.payload, ...state];
    },
    removeFromCart: (state, action) => {
      // Get the _id of the product to remove from the payload
      const productIdToRemove = action.payload;

      // Filter out the product with the specified _id
      const updatedCart = state.filter(
        (product) => product._id !== productIdToRemove
      );

      return updatedCart;
    },
  },
});

export const { setCart, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
