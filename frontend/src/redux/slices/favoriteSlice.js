import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: null,
  reducers: {
    updateFavorites: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
