import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./components/store";
import Login from "./components/Login";
import LoginSuccess from "./components/LoginSuccess";
import LoginFail from "./components/LoginFail";
import "./App.css";

function App() {
  const { isLoggedIn, loginAttemptFailed } = useSelector((state) => state.auth);

  let content;
  if (isLoggedIn) {
    content = <LoginSuccess />;
  } else if (loginAttemptFailed) {
    content = <LoginFail />;
  } else {
    content = <Login />;
  }

  return (
    <Provider store={store}>
      <div>{content}</div>
    </Provider>
  );
}

export default App;
