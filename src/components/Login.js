import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFail } from "./authSlice";
import "./Styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "cfg" && password === "2023") {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFail());
    }
  };

  return (
    <div className="form-container">
      <h1>Welcome, please log in</h1>
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
