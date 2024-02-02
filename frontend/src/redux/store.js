import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  devTools: true,
});
