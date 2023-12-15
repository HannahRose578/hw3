// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    loginAttemptFailed: false,
  },
  reducers: {
    resetLoginAttempt: (state) => {
      state.loginAttemptFailed = false;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.loginAttemptFailed = false;
    },
    loginFail: (state) => {
      state.isLoggedIn = false;
      state.loginAttemptFailed = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.loginAttemptFailed = false;
    },
  },
});

export const { loginSuccess, loginFail, logout, resetLoginAttempt } =
  authSlice.actions;
export default authSlice.reducer;
