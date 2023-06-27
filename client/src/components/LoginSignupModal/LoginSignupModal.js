import React, { useState } from "react";
import "../../index.css";

// Lists all the entries imported from the Journal component and displays them in a read-only format list format.
const LoginSignupModal = ({ mode, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");

  // handles the change of the username field
  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // set the username to the value of the target
  };
  // handles the change of the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // set the password to the value of the target
  };
  // handles the change of the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // set the email to the value of the target
  };
  // handles the change of the verify email field
  const handleVerifyEmailChange = (e) => {
    setVerifyEmail(e.target.value); // set the verify email to the value of the target
  };

  // handles the login and signup buttons
  const handleLogin = () => {
    // Perform login logic here
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    // Reset the form
    setUsername("");
    setPassword("");
    // Close the modal
    onClose();
  };

  // handles the signup button
  const handleSignup = () => {
    // Perform signup logic here
    console.log(
      "Signing up with username:",
      username,
      "email:",
      email,
      "and password:",
      password
    );
    // Reset the form
    setUsername("");
    setEmail("");
    setPassword("");
    setVerifyEmail("");
    // Close the modal
    onClose();
  };

  // returns the login and signup modal
  return (
    <div className="login-signup-modal">
      {mode === "login" && (
        <>
          <h1>Login</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        </>
      )}

      {mode === "signup" && (
        <>
          <h1>Sign Up</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Verify Email:</label>
            <input
              type="email"
              value={verifyEmail}
              onChange={handleVerifyEmailChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginSignupModal;
