import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/tokenSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import favoriteReducer from "./slices/favoriteSlice";
import loaderReducer from "./slices/loaderSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    cart: cartReducer,
    favorites: favoriteReducer,
    loader: loaderReducer
  },
  devTools: true,
});
