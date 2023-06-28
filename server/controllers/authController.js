const bcrypt = require("bcrypt"); //bcrypt is a library that helps you hash passwords
const jwt = require("jsonwebtoken"); //jsonwebtoken is a library that helps you sign and verify tokens
const User = require("../models/User");
const config = require("../config/config");

// Create a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body; // get username, email, and password from req.body

    // Check if the user already exists
    const existingUser = await User.findOne({ email }); // find a user with the given email
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" }); // return an error if the user already exists
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // hash the password with a salt of 10; salt is a random string that is used to hash the password

    // Create a new user
    const user = new User({ username, email, password: hashedPassword }); // create a new user with the given username, email, and hashed password
    await user.save();

    res.status(201).json({ message: "User registered successfully" }); // return a success message if the user is created successfully
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" }); // return an error if there is an error registering the user
  }
};

// Login a user,
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // get email and password from req.body

    // Find the user by email
    const user = await User.findOne({ email }); // find a user with the given email
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" }); // return an error if the user does not exist
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password); // compare the given password with the hashed password
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" }); // return an error if the password is incorrect
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn, // sign a JWT token with the user id and the secret from the config; JWT tokens expire after 1 day by default but you can change this by setting the expiresIn property in the config
    });

    // Return the token
    res.status(200).json({ token }); // return the token
  } catch (error) {
    console.error("Error logging in user:", error); // return an error if there is an error logging in the user
    res.status(500).json({ error: "Internal server error" }); // return an error if there is an error logging in the user
  }
};

// Export the functions
module.exports = {
  registerUser, // registerUser is the same as registerUser: registerUser; this is called object shorthand syntax
  loginUser, // loginUser is the same as loginUser: loginUser; this is called object shorthand syntax
};
