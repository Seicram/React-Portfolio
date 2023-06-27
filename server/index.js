require("dotenv").config(); //dotenv is a library that helps you load environment variables from a .env file
const express = require("express"); //express is a node module that allows us to create a server
const cors = require("cors"); //cors is a library that allows you to make requests to the server from a different origin
const morgan = require("morgan"); //morgan is a library that helps you log requests to the server
const connectDB = require("./utils/db"); //connectDB is a function in db.js

const authRoutes = require("./routes/authRoutes");
const journalRoutes = require("./routes/journalRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

// create an express app
const app = express();

// connect to MongoDB
connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/reviews", reviewRoutes);

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
