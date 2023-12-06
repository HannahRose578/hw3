// Login.js
import React, { useState } from "react";
import "./Styles.css";

function Login({ setIsLoggedIn, setLoginAttemptFailed }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "cfg" && password === "2023") {
      setIsLoggedIn(true);
    } else {
      setLoginAttemptFailed(true);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Username:</label>
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
