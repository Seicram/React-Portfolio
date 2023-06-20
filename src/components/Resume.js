import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h1 style={{ textAlign: 'center' }}>Resume</h1>
      <a href="resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;
