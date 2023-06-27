const express = require("express"); //express is a node module that allows us to create a server
const router = express.Router(); //router is a method in express that allows us to create routes
const journalController = require("../controllers/journalController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, journalController.createJournal); //createJournal is a function in journalController.js
router.get("/", journalController.getAllJournals); //getAllJournals is a function in journalController.js
router.get("/:id", journalController.getJournalById); //getJournalById is a function in journalController.js
router.put("/:id", authMiddleware, journalController.updateJournal); //updateJournal is a function in journalController.js
router.delete("/:id", authMiddleware, journalController.deleteJournal); //deleteJournal is a function in journalController.js

module.exports = router;
