import { createSlice } from "@reduxjs/toolkit";
const storedToken = localStorage.getItem("azkartJwt");

const tokenSlice = createSlice({
  name: "Token",
  initialState: storedToken ? storedToken : null,
  reducers: {
    changeToken: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
