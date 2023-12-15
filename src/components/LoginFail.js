import React from "react";
import { useDispatch } from "react-redux";
import { resetLoginAttempt } from "./authSlice"; // Ensure this action is defined
import "./Styles.css";

function LoginFail() {
  const dispatch = useDispatch();

  return (
    <div className="LoginFail-container">
      <h1>Login Unsuccessful, please try again.</h1>
      <button
        className="LoginFail-button"
        onClick={() => dispatch(resetLoginAttempt())} // Dispatch action to reset state
      >
        Back to Login Page
      </button>
    </div>
  );
}

export default LoginFail;
