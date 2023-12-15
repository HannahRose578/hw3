import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFail } from "./authSlice";
import "./Styles.css";

function Login() {
  const [username, setUsername] = useState(""); // State for username input.
  const [password, setPassword] = useState(""); // State for password input.
  const dispatch = useDispatch(); // Dispatch function from Redux.

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behaviour.
    const isLoginValid = username === "cfg" && password === "2023"; // Checks for valid credentials.

    // Dispatch Redux actions based on credential validation.
    if (isLoginValid) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFail());
    }
  };

  // Function to handle input changes.
  const handleInputChange = (setter) => (e) => setter(e.target.value);

  return (
    <div className="form-container">
      <h1>Welcome, please log in</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username:"
          type="text"
          value={username}
          onChange={handleInputChange(setUsername)}
        />
        <InputField
          label="Password:"
          type="password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

// Reusable InputField component for cleaner code.
function InputField({ label, type, value, onChange }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Login;
