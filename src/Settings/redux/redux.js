import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./combine";
export const store = configureStore({
    reducer: RootReducer,
    devTools: process.env.NODE_ENV === "development" ? true: false
})