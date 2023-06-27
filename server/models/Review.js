const mongoose = require("mongoose");

// create a review schema
const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String, // title is a string
      required: true, // title is required
    },
    content: {
      type: String, // content is a string
      required: true, // content is required
    },
    author: {
      type: mongoose.Schema.Types.ObjectId, // author is a reference to the User model
      ref: "User", // author is a reference to the User model
      required: true, // author is required
    },
  },
  { timestamps: true } // timestamps is an object with createdAt and updatedAt properties
);

const Review = mongoose.model("Review", reviewSchema); // create a review model

module.exports = Review;
