const express = require("express"); //express is a node module that allows us to create a server
const router = express.Router(); // router is a method in express that allows us to create routes
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, reviewController.getReviews); //getReviews is a function in reviewController.js
router.get("/:id", authMiddleware, reviewController.getReviewById); //getReviewById is a function in reviewController.js
router.post("/", authMiddleware, reviewController.createReview); //createReview is a function in reviewController.js
router.put("/:id", authMiddleware, reviewController.updateReview); //updateReview is a function in reviewController.js
router.delete("/:id", authMiddleware, reviewController.deleteReview); //deleteReview is a function in reviewController.js

module.exports = router;
