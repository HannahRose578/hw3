import { createSlice } from "@reduxjs/toolkit";

// This slice manages the authentication state within the Redux store.
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false, // Tracks user's logged-in status.
    loginAttemptFailed: false, // Tracks if the login attempt was unsuccessful.
  },
  reducers: {
    resetLoginAttempt: (state) => {
      // Resets login attempt status.
      state.loginAttemptFailed = false;
    },
    loginSuccess: (state) => {
      // Updates state on successful login.
      state.isLoggedIn = true;
      state.loginAttemptFailed = false;
    },
    loginFail: (state) => {
      // Updates state on failed login.
      state.isLoggedIn = false;
      state.loginAttemptFailed = true;
    },
    logout: (state) => {
      // Handles user logout, resets both isLoggedIn and loginAttemptFailed.
      state.isLoggedIn = false;
      state.loginAttemptFailed = false;
    },
  },
});

export const { loginSuccess, loginFail, logout, resetLoginAttempt } =
  authSlice.actions;
export default authSlice.reducer;
