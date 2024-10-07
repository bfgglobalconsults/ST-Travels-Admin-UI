import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // User is initially null (not logged in)
  token: null, // Token will be saved here after login
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token; // Optionally store tokens in Redux
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
