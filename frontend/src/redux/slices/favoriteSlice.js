import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: null,
  reducers: {
    addToFavorites: (state, action) => {
      return [action.payload, ...state.favorites];
    },
    removeFromFavorites: (state, action) => {
      // Get the _id of the product to remove from the payload
      const productIdToRemove = action.payload;

      // Filter out the product with the specified _id
      const updatedFavorites = state.products.filter(
        (product) => product._id !== productIdToRemove
      );

     return updatedFavorites;
    },
    setFavorites: (state, action) => {
      return action.payload;
    }
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
