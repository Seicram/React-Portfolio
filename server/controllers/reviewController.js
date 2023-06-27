const Review = require("../models/Review");

// Create a new review
const createReview = async (req, res) => {
  try {
    const { title, content } = req.body; // get title and content from req.body

    const review = new Review({ title, content }); // create a new review with the given title and content
    await review.save();

    // return a success message if the review is created successfully
    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    // return all reviews
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a review by id
module.exports = {
  createReview, // return an error if there is an error creating the review
  getReviews, // return an error if there is an error retrieving the reviews
};
