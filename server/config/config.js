require("dotenv").config(); // Load environment variables from .env file

// Export configuration object
module.exports = {
  port: process.env.PORT || 3000, // set port to process.env.PORT or 3000
  database: {
    url: process.env.MONGODB_URL || "mongodb://localhost/travel_app", // set database url to process.env.MONGODB_URL or mongodb://localhost/travel_app
    options: {
      useNewUrlParser: true, // set useNewUrlParser to true; useNewUrlParser is a boolean that tells mongoose to use the new parser logic
      useUnifiedTopology: true, // set useUnifiedTopology to true; useUnifiedTopology is a boolean that tells mongoose to use the new server discovery and monitoring engine
      useCreateIndex: true, // set useCreateIndex to true; useCreateIndex is a boolean that tells mongoose to use the createIndex() function instead of ensureIndex()
      useFindAndModify: false, // set useFindAndModify to false; useFindAndModify is a boolean that tells mongoose to use findOneAndUpdate() instead of findAndModify()
    },
  },
  // set jwt to an object with a secret property and an expiresIn property
  jwt: {
    secret: process.env.JWT_SECRET || "secretkey", // secret is a string that is used to sign the token
    expiresIn: "1d",
  },
  // set logger to an object with a level property
  logger: {
    level: process.env.LOG_LEVEL || "info", // level is a string that tells the logger what level of messages to log
  },
};
