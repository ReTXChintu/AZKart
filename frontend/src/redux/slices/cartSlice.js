import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: null,
  reducers: {
    updateCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
