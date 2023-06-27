// server/utils/db.js
const mongoose = require("mongoose"); //mongoose is a node module that allows us to connect to MongoDB
const config = require("../config/config");

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(config.database.url, config.database.options); //connect to MongoDB using the url and options from config.js
    console.log("MongoDB connected"); //log a message if the connection is successful
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); //log an error message if the connection is unsuccessful
    process.exit(1); //exit the process if the connection is unsuccessful
  }
};

module.exports = connectDB;
