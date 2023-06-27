const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", authController.registerUser); //registerUser is a function in authController.js
router.post("/login", authController.loginUser); //loginUser is a function in authController.js
router.get("/logout", authController.logoutUser); //logoutUser is a function in authController.js

router.get("/protected", authMiddleware, authController.protectedRoute); //protcted is a route that can only be accessed by a logged in user

module.exports = router;
