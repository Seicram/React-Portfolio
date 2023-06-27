const Journal = require("../models/Journal");

// Create a new journal entry
const createJournal = async (req, res) => {
  try {
    const { title, text } = req.body; // get title and text from req.body

    const journal = new Journal({ title, text }); // create a new journal entry with the given title and text
    await journal.save(); // save the journal entry

    res
      .status(201)
      .json({ message: "Journal entry created successfully", journal }); // return a success message if the journal entry is created successfully
  } catch (error) {
    console.error("Error creating journal entry:", error); // return an error if there is an error creating the journal entry
    res.status(500).json({ error: "Internal server error" }); // return an error if there is an error creating the journal entry
  }
};

// Get all journal entries
const getAllJournals = async (req, res) => {
  try {
    const journals = await Journal.find(); // get all journal entries

    res.status(200).json(journals); // return all journal entries
  } catch (error) {
    console.error("Error retrieving journal entries:", error); // return an error if there is an error retrieving the journal entries
    res.status(500).json({ error: "Internal server error" }); // return an error if there is an error retrieving the journal entries
  }
};

// Get a journal entry by id
const getJournalById = async (req, res) => {
  try {
    const { id } = req.params; // get the journal entry id from req.params

    const journal = await Journal.findById(id); // find a journal entry with the given id

    if (!journal) {
      return res.status(404).json({ error: "Journal entry not found" }); // return an error if the journal entry does not exist
    }

    res.status(200).json(journal); // return the journal entry
  } catch (error) {
    console.error("Error retrieving journal entry:", error); // return an error if there is an error retrieving the journal entry
    res.status(500).json({ error: "Internal server error" }); // return an error if there is an error retrieving the journal entry
  }
};

// Update a journal entry
const updateJournal = async (req, res) => {
  try {
    const { id } = req.params; // get the journal entry id from req.params
    const { title, text } = req.body; // get title and text from req.body

    const journal = await Journal.findByIdAndUpdate(
      id,
      { title, text },
      { new: true }
    ); // find a journal entry with the given id and update it with the given title and text

    // return an error if the journal entry does not exist
    if (!journal) {
      return res.status(404).json({ error: "Journal entry not found" });
    }

    // return the updated journal entry
    res
      .status(200)
      .json({ message: "Journal entry updated successfully", journal });
  } catch (error) {
    console.error("Error updating journal entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a journal entry
const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;

    const journal = await Journal.findByIdAndDelete(id); // find a journal entry with the given id and delete it

    if (!journal) {
      return res.status(404).json({ error: "Journal entry not found" });
    }

    // return a success message if the journal entry is deleted successfully
    res.status(200).json({ message: "Journal entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting journal entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export the journal controller
module.exports = {
  createJournal, // export the createJournal function
  getAllJournals, // export the getAllJournals function
  getJournalById, // export the getJournalById function
  updateJournal, // export the updateJournal function
  deleteJournal, // export the deleteJournal function
};
