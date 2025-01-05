import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "../features/saveAnime/savedSlice";
import likeReducer from "../features/saveAnime/likeSlice";
import filterReducer from "../features/filter/filterSlice";
import formReducer from "../features/forms/formSlice";

export const store = configureStore({
  reducer: {
    saved: savedReducer,
    like: likeReducer,
    filter: filterReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable SerializableStateInvariantMiddleware
      immutableCheck: false, // Disable ImmutableStateInvariantMiddleware
    }),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development only
});
