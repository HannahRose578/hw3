// App.js
import React, { useState } from "react";
import Login from "./components/Login";
import LoginSuccess from "./components/LoginSuccess";
import LoginFail from "./components/LoginFail";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginAttemptFailed, setLoginAttemptFailed] = useState(false);

  return (
    <div>
      {/*Conditional rendering of components based on state*/}
      {isLoggedIn ? (
        <LoginSuccess setIsLoggedIn={setIsLoggedIn} />
      ) : loginAttemptFailed ? (
        <LoginFail setLoginAttemptFailed={setLoginAttemptFailed} />
      ) : (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          setLoginAttemptFailed={setLoginAttemptFailed}
        />
      )}
    </div>
  );
}

export default App;
