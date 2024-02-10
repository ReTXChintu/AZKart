import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "Loader",
  initialState: false,
  reducers: {
    toggleLoader: (state, action) => {
      return !state;
    },
  },
});

export const { toggleLoader } = loaderSlice.actions;

export default loaderSlice.reducer;