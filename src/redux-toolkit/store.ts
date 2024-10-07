import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import ThemeCustomize from "./reducers/ThemeCustomize";
import authReducer from "./reducers/authSlice";


export const store = configureStore({
  reducer: {
    ThemeCustomize,
    auth: authReducer,
  },
  devTools: true,
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
