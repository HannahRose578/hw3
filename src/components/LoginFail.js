// LoginFail.js
import React from "react";
import styles from "./Styles.css";

function LoginFail({ setLoginAttemptFailed }) {
  return (
    <div className="LoginFail-container">
      <h1>Login Unsuccessful, please try again.</h1>
      <button
        className="LoginFail-button"
        onClick={() => setLoginAttemptFailed(false)}
      >
        Back to Login Page
      </button>
    </div>
  );
}

export default LoginFail;
