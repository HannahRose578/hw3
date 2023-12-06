// LoginSuccess.js
import React from "react";
import "./Styles.css"; // Ensure the correct path is set

function LoginSuccess({ setIsLoggedIn }) {
  return (
    <div className="LoginSuccess-container">
      <h1>Welcome! You have successfully logged in.</h1>
      <button
        className="LoginSuccess-button"
        onClick={() => setIsLoggedIn(false)}
      >
        Logout
      </button>
    </div>
  );
}

export default LoginSuccess;
