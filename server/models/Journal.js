// server/models/Journal.js
const mongoose = require("mongoose"); // import mongoose

// create a journal schema
const journalSchema = new mongoose.Schema({
  title: {
    type: String, // title is a string
    required: true, // title is required
  },
  text: {
    type: String, // text is a string
    required: true, // text is required
  },
});

// create a journal model
module.exports = mongoose.model("Journal", journalSchema); // export the journal model
const mongoose = require("mongoose"); // import mongoose

// create a journal schema
const journalSchema = new mongoose.Schema({
  title: {
    type: String, // title is a string
    required: true, // title is required
  },
  text: {
    type: String, // text is a string
    required: true, // text is required
  },
});

// create a journal model
const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;
