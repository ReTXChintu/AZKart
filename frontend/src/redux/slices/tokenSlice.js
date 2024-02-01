import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "Token",
  initialState: null,
  reducers: {
    changeToken: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
