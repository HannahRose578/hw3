import React, { useState } from 'react';

// App Component
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loginAttemptFailed, setLoginAttemptFailed] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming 'admin' as the correct username and 'password' as the correct password
    if (username === 'admin' && password === 'password') {
      setUserIsLoggedIn(true);
      setLoginAttemptFailed(false);
    } else {
      setLoginAttemptFailed(true);
    }
  };

  const handleLogout = () => {
    setUserIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (userIsLoggedIn) {
    // Successful Login Screen
    return (
      <div>
        <h1>Welcome! You have successfully logged in.</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else if (loginAttemptFailed) {
    // Unsuccessful Login Screen
    return (
      <div>
        <h1>Login Unsuccessful, please try again.</h1>
        <button onClick={() => setLoginAttemptFailed(false)}>Back to Login Page</button>
      </div>
    );
  } else {
    // Login Screen
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default App;
