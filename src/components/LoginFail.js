import React from "react";
import { useDispatch } from "react-redux";
import { resetLoginAttempt } from "./authSlice"; // Importing the resetLoginAttempt action.
import "./Styles.css";

function LoginFail() {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions.

  const handleBackClick = () => {
    dispatch(resetLoginAttempt()); // Dispatches action to reset login attempt state.
  };

  return (
    <div className="LoginFail-container">
      <h1>Login Unsuccessful, please try again.</h1>
      <button className="LoginFail-button" onClick={handleBackClick}>
        Back to Login Page
      </button>
    </div>
  );
}

export default LoginFail;
