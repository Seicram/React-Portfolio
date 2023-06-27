const jwt = require("jsonwebtoken"); //jsonwebtoken is a library that helps you sign and verify tokens
const config = require("../config/config");

// Generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  }); //  sign a JWT token with the user id and the secret from the config; JWT tokens expire after 1 day by default but you can change this by setting the expiresIn property in the config
};

// Verify a JWT token
const verifyToken = (token) => {
  return jwt.verify(token, config.jwt.secret); // verify the token with the secret from the config
};

module.exports = { generateToken, verifyToken }; // export the generateToken and verifyToken functions
