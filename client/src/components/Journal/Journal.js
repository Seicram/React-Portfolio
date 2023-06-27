import React, { useState, useEffect, useRef } from "react"; //  react, useState, useEffect, and useRef is used to import react, useState, useEffect, and useRef from react library
import { Link } from "react-router-dom";
import "../../index.css";
import Community from "../Community/Community";

// Lists all the entries imported from the Journal component and displays them in a read-only format list format with a link to the Community page.
const Journal = ({ addToJournalEntries, addToCommunity, community }) => {
  const [journalTitle, setJournalTitle] = useState(""); // set the journal title
  const [journalEntry, setJournalEntry] = useState(""); // set the journal entry
  const [journalEntries, setJournalEntries] = useState([]); // set the journal entries
  const [editEntryId, setEditEntryId] = useState(null); // set the edit entry id
  const [selectedEntryId, setSelectedEntryId] = useState(null); // set the selected entry id
  const [displayedEntryIndex, setDisplayedEntryIndex] = useState(0); // set the displayed entry index
  const [addToCommunityFlag, setAddToCommunityFlag] = useState(false); // set the add to community flag
  const entryRef = useRef(null); // set the entry reference

  // Load journal entries from local storage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem("journalEntries"); // get the journal entries from local storage
    if (storedEntries) {
      setJournalEntries(JSON.parse(storedEntries)); // set the journal entries
    }
  }, []);

  useEffect(() => {
    if (selectedEntryId) {
      const index = journalEntries.findIndex(
        (entry) => entry.id === selectedEntryId
      ); // get the index of the selected entry id
      if (index !== -1) {
        setDisplayedEntryIndex(index); // set the displayed entry index
        entryRef.current.scrollIntoView({ behavior: "smooth" }); // scroll to the entry reference
      }
    }
  }, [selectedEntryId]); // set the selected entry id

  // Add new entry to journal entries
  const handleJournalTitleChange = (event) => {
    const { value } = event.target; // get the value from the event target
    if (value.length <= 25) {
      setJournalTitle(value); // set the journal title value to the value from the event target if the value is less than or equal to 25 characters
    }
  };

  // Add new entry to journal entries
  const handleJournalEntryChange = (event) => {
    const { value } = event.target; // get the value from the event target
    if (value.length <= 500) {
      setJournalEntry(value); // set the journal entry value to the value from the event target if the value is less than or equal to 500 characters
    }
  };

  // Add new entry to journal entries
  const saveJournalEntry = () => {
    if (journalTitle.trim() !== "" && journalEntry.trim() !== "") {
      if (editEntryId) {
        // Edit existing entry
        const updatedEntries = journalEntries.map((entry) => {
          if (entry.id === editEntryId) {
            return {
              ...entry,
              title: journalTitle.trim(),
              text: journalEntry.trim(),
            }; // return the entry title and text if the entry id matches the edit entry id
          }
          return entry; // return the entry
        });
        setJournalEntries(updatedEntries); // set the journal entries
        setEditEntryId(null); // set the edit entry id
      } else {
        // Create new entry
        const newEntry = {
          id: Date.now(),
          title: journalTitle.trim(), // trim the journal title
          text: journalEntry.trim(), // trim the journal entry
        };
        const updatedEntries = [...journalEntries, newEntry]; // set the updated entries to the journal entries and new entry
        setJournalEntries(updatedEntries); // set the journal entries to the updated entries

        // Prompt the user if they want to add the entry to Community
        const shouldAddToCommunity = window.confirm(
          "Do you want to add this entry to the community?"
        ); // prompt the user if they want to add the entry to the Community
        setAddToCommunityFlag(shouldAddToCommunity); // set the add to community flag to the should add to community flag
        if (shouldAddToCommunity) {
          addToCommunity(newEntry); // add the new entry to the Community
        }
      }
      setJournalTitle(""); // set the journal title
      setJournalEntry(""); // set the journal entry

      // Store journal entries in local storage
      localStorage.setItem("journalEntries", JSON.stringify(journalEntries)); // store the journal entries in local storage
    }
  };

  // Select an entry to edit
  const selectJournalEntry = (id) => {
    setSelectedEntryId(id); // set the selected entry id
  };

  // Edit an entry
  const editJournalEntry = (id) => {
    const entry = journalEntries.find((entry) => entry.id === id); // find the entry id
    if (entry) {
      setJournalTitle(entry.title); // set the journal title
      setJournalEntry(entry.text); // set the journal entry
      setEditEntryId(entry.id);
      setSelectedEntryId(null); // Reset the selected entry ID to go back to the main page
    }
  };

  // Delete an entry
  const deleteJournalEntry = (id) => {
    const updatedEntries = journalEntries.filter((entry) => entry.id !== id); // set the updated entries to the journal entries filtered by the entry id
    setJournalEntries(updatedEntries); // set the journal entries to the updated entries
    setSelectedEntryId(null); // set the selected entry id

    // Update local storage
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries)); // store the updated entries in local storage
  };
  // clear the journal entry
  const clearJournalEntry = () => {
    setJournalTitle(""); // set the journal title
    setJournalEntry(""); // set the journal entry
    setEditEntryId(null); // set the edit entry id
  };

  // Cancel editing an entry
  const cancelEdit = () => {
    setJournalTitle(""); // set the journal title
    setJournalEntry(""); // set the journal entry
    setEditEntryId(null); // set the edit entry id
  };

  // Add entry to Community
  const goToPreviousEntry = () => {
    if (displayedEntryIndex > 0) {
      setSelectedEntryId(journalEntries[displayedEntryIndex - 1].id); // set the selected entry id
    }
  };

  // Add entry to Community
  const goToNextEntry = () => {
    if (displayedEntryIndex < journalEntries.length - 1) {
      setSelectedEntryId(journalEntries[displayedEntryIndex + 1].id); // set the selected entry id
    }
  };

  // Add entry to Community
  const goToMainPage = () => {
    setSelectedEntryId(null); // set the selected entry id
    setDisplayedEntryIndex(0); // set the displayed entry index
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic here
  };

  const handleTwitterLogin = () => {
    // Handle Twitter login logic here
  };

  const handleInstagramLogin = () => {
    // Handle Instagram login logic here
  };

  // Add entry to Community
  return (
    <div className="container">
      {!selectedEntryId ? (
        <div>
          <h1>Travel Journal</h1>
          <input
            type="text"
            value={journalTitle}
            onChange={handleJournalTitleChange}
            placeholder="Enter the title"
            className="title-input"
          />
          <textarea
            value={journalEntry}
            onChange={handleJournalEntryChange}
            placeholder="Write your travel experiences, memories, or notes here..."
            className="entry-textarea"
          ></textarea>
          <div className="buttons-container">
            <button onClick={saveJournalEntry} className="save-button">
              {editEntryId ? "Update Entry" : "Save Entry"}
            </button>
            {editEntryId && (
              <button onClick={cancelEdit} className="cancel-button">
                Cancel
              </button>
            )}
            <button onClick={clearJournalEntry} className="clear-button">
              Clear Entry
            </button>
          </div>
          {addToCommunityFlag && (
            <Community entry={journalEntries[journalEntries.length - 1]} />
          )}
        </div>
      ) : (
        <div className="entry-view-container" ref={entryRef}>
          <h1>{journalEntries[displayedEntryIndex]?.title}</h1>
          <p>{journalEntries[displayedEntryIndex]?.text}</p>
          <div className="entry-navigation">
            <button onClick={goToPreviousEntry} className="navigation-button">
              Previous
            </button>
            <button onClick={goToNextEntry} className="navigation-button">
              Next
            </button>
            <button onClick={goToMainPage} className="new-note-button">
              New Note
            </button>
            {selectedEntryId === journalEntries[displayedEntryIndex]?.id && (
              <div className="entry-actions">
                <Link
                  to={`/journal/edit/${selectedEntryId}`}
                  className="edit-button"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJournalEntry(selectedEntryId)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Journal Entry History */}
      <div className="journal-entry-history">
        <h2>Journal Entry History</h2>
        {journalEntries.length > 0 ? (
          <ul>
            {journalEntries.map((entry) => (
              <li key={entry.id}>
                <Link
                  to={`/journal/edit/${entry.id}`}
                  onClick={() => editJournalEntry(entry.id)}
                  className="entry-link"
                >
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No entries yet.</p>
        )}
      </div>

      {/* Social Sharing section */}
      {selectedEntryId && (
        <div>
          <h1>Social Sharing</h1>
          <div>
            <button
              onClick={handleFacebookLogin}
              style={{ marginRight: "15px" }}
            >
              Share on Facebook
            </button>
            <button
              onClick={handleTwitterLogin}
              style={{ marginRight: "15px" }}
            >
              Share on Twitter
            </button>
            <button onClick={handleInstagramLogin}>Share on Instagram</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
