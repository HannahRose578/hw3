import React from "react";
import Login from "./components/Login";
import LoginSuccess from "./components/LoginSuccess";
import LoginFail from "./components/LoginFail";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/store";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginAttemptFailed = useSelector(
    (state) => state.auth.loginAttemptFailed
  );

  return (
    <Provider store={store}>
      <div>
        {/*Conditional rendering of components based on Redux state*/}
        {isLoggedIn ? (
          <LoginSuccess />
        ) : loginAttemptFailed ? (
          <LoginFail />
        ) : (
          <Login />
        )}
      </div>
    </Provider>
  );
}

export default App;
