import { configureStore } from "@reduxjs/toolkit";
import joke from "./slices/joke"

export const store = configureStore({
  reducer: {
    joke,
  },
});
