import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <section id="about">
        {/* About Me section */}
        <h2>About Me</h2>
        {/* Add recent photo or avatar and a short bio about the developer */}
        <div>
          <img src="avatar.jpg" alt="Developer Avatar" />
          <p>Short bio about the developer...</p>
        </div>
      </section>
      <section id="portfolio">
        {/* Portfolio section */}
        <h2>Portfolio</h2>
        {/* Render multiple instances of Project component with project data */}
        <Project
          title="Project 1"
          image="project1.jpg"
          deployedLink="https://example.com/project1"
          githubLink="https://github.com/username/project1"
        />
        <Project
          title="Project 2"
          image="project2.jpg"
          deployedLink="https://example.com/project2"
          githubLink="https://github.com/username/project2"
        />
        {/* Add more projects as needed */}
      </section>
      <section id="contact">
        {/* Contact section */}
        <h2>Contact</h2>
        {/* Add contact form with name, email address, and message fields */}
        <form>
          {/* Form fields */}
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          {/* Submit button */}
          <button type="submit">Send Message</button>
        </form>
      </section>
      <section id="resume">
        {/* Resume section */}
        <h2>Resume</h2>
        {/* Add link to downloadable resume and list of proficiencies */}
        <a href="resume.pdf" download>Download Resume</a>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default App;
