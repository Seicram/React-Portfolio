import React from "react"; // import React, { useState } from 'react';

// Lists all the entries imported from the Journal component and displays them in a read-only format list format.
const CommunityPage = ({ community }) => {
  return (
    <div>
      <h1>Community</h1>
      {community && community.length > 0 ? (
        community.map((entry) => (
          <div key={entry.id}>
            <h2>{entry.title}</h2>
            <p>{entry.text}</p>
          </div>
        ))
      ) : (
        <p>No entries in the community.</p>
      )}
    </div>
  );
};

export default CommunityPage;
