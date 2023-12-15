import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice"; // Importing the logout action from authSlice.
import "./Styles.css";

function LoginSuccess() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions.

  const handleLogout = () => {
    dispatch(logout()); // Dispatches the logout action to update Redux state.
  };

  return (
    <div className="LoginSuccess-container">
      <h1>Welcome! You have successfully logged in.</h1>
      <button className="LoginSuccess-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LoginSuccess;
