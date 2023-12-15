import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice";
import "./Styles.css";

function LoginSuccess() {
  const dispatch = useDispatch();

  return (
    <div className="LoginSuccess-container">
      <h1>Welcome! You have successfully logged in.</h1>
      <button
        className="LoginSuccess-button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}

export default LoginSuccess;
