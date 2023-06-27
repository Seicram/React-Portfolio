const jwt = require("jsonwebtoken"); //jsonwebtoken is a library that helps you sign and verify tokens
const config = require("../config/config");

// Authenticate a user
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // get the authorization header from the request

    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized" }); // return an error if the authorization header is missing
    }

    const token = authHeader.split(" ")[1]; // get the token from the authorization header

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" }); // return an error if the token is missing
    }

    const decodedToken = jwt.verify(token, config.jwt.secret); // verify the token with the secret from the config

    req.user = { userId: decodedToken.userId }; // set the user id in the request

    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
