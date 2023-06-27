import React from "react";
import "../../index.css";

// logout button
const Logout = () => {
  const handleLogout = () => {
    // Perform the logout logic here, such as clearing session or token
    // You can redirect the user to the login page or perform any other necessary actions
    console.log("User logged out"); // logs to console when user logs out
  };

  // logout button
  return (
    <div>
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
      {/* logout button */}
    </div>
  );
};

export default Logout;
