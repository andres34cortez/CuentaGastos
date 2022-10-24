import { configureStore } from "@reduxjs/toolkit";
import gastosReducer from "../features/Gastos/Gastos";

export const store = configureStore({
  reducer: {
    gastos: gastosReducer,
  },
});
