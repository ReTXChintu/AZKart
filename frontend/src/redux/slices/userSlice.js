import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    updateUser: (state, action) => {
      console.log("got update");
      return action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
