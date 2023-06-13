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
        <img src="../img/profilepic.png" alt="Developer Avatar" />

          <p>I am a military veteran with a demonstrated track record of excellence in various roles. Currently employed as an IT Specialist at the US Environmental Protection Agency, I provide support in application software development and coding. I have certifications in IT with commitment to continuous academic growth. My leadership skills and commitment to personal and professional development make me a valuable asset. I have experience managing programs and ensuring compliance in the healthcare sector. With strong problem-solving, communication, and technical skills, I excel in delivering results and contributing to organizational success. </p>
        </div>
      </section>
      <section id="portfolio">
        {/* Portfolio section */}
        <h2>Portfolio</h2>
        {/* Render multiple instances of Project component with project data */}
        <div className="projects-container">
        <Project
          title="Code Refactor"
          image="../img/code refactor.png"
          description="This was to refactor the code for a website to make it more accessible."
          deployedLink="https://seicram.github.io/Code-Refactor/"
          githubLink="https://github.com/Seicram/Code-Refactor"
        />
        <Project
          title="Professional Portfolio"
          image="../img/pp.png"
          description="This application is my professional portfolio. It contains information about me, my projects, and my contact information."
          deployedLink="https://github.com/Seicram/Professional-Portfolio"
          githubLink="https://seicram.github.io/Professional-Portfolio/"
        />
        <Project
          title="Password Generator"
          image="../img/passgen.png"
          description="This application is a password generator that produces a random password based on user-selected criteria"
          deployedLink="https://seicram.github.io/Password-Generator/"
          githubLink="https://github.com/Seicram/Password-Generator"
        />
                <Project
          title="Code Quiz"
          image="../img/codequiz.png"
          description="This application is a timed coding quiz with multiple-choice questions that runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code."
          deployedLink="https://seicram.github.io/Code-Quiz/"
          githubLink="https://github.com/Seicram/Code-Quiz"
        />
        <Project
          title="Work Day Scheduler"
          image="../img/worddsch.png"
          description="This application is a simple calendar that allows the user to save events for each hour of the day."
          deployedLink="https://seicram.github.io/Work-Day-Scheduler/"
          githubLink="https://github.com/Seicram/Work-Day-Scheduler"
        />
        <Project
          title="Weather Dashboard"
          image="../img/weather.png"
          description="This application is a weather dashboard that will run in the browser and returns current and future weather conditions for a city that the user inputs."
          deployedLink="https://seicram.github.io/Weather-Dashboard/"
          githubLink="https://github.com/Seicram/Weather-Dashboard"
        />
        <Project
          title="Project 1"
          image="../img/trivia.png"
          description="This project is a trivia game that uses JavaScript for the logic and jQuery to manipulate HTML. The game is timed and the player has 30 seconds to answer each question."
          deployedLink="https://seicram.github.io/Trivia-Game/"
          githubLink="https://github.com/Seicram/Trivia-Game"
        />
        <Project
          title="Professional README Generator"
          image="../img/readgen.png"
          description="This application can be used to generate a professional README file. This application uses Node.js and the Inquirer package."
          deployedLink="https://drive.google.com/file/d/1rbYl8EnpOadKCG-fVWsFafVW2oySTYUk/view"
          githubLink="https://github.com/Seicram/Professional-README-Generator"
        />
        <Project
          title="SVG Logo Maker"
          image="Module10.jpg"
          description="This application can be used to create a logo using SVG elements. This application uses Node.js, Inquirer, and SVG.js."
          deployedLink="https://drive.google.com/file/d/1So-WQX4MdkvM_4VQFqJXwZ4IC_YpS-UC/view"
          githubLink="https://github.com/Seicram/SVG-Logo-Maker-"
        />
        <Project
          title="Note Taker"
          image="Module11.jpg"
          description="This application can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file."
          deployedLink="https://note-taker-smith.herokuapp.com/"
          githubLink="https://github.com/Seicram/Note-Taker"
        />
        <Project
          title="Employee Tracker"
          image="Module12.jpg"
          description="This application can be used to manage a company's employees using node, inquirer, and MySQL. This application allows the user to view and manage the departments, roles, and employees in the company."
          deployedLink=" https://drive.google.com/file/d/1Ab8MbkMVzPaKA-zCN4lqUoPPHxh4etNb/view"
          githubLink="https://github.com/Seicram/Employee-Tracker"
        />
        <Project
          title="E-commerce Back End"
          image="Module13.jpg"
          description="This application can be used to manage the back end of an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database."
          deployedLink="https://example.com/project3"
          githubLink="https://github.com/Seicram/E-commerce-Back-End"
        />
        <Project
          title="Tech Blog"
          image="Module14.jpg"
          description="This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well."
          deployedLink="https://example.com/techblog"
          githubLink="https://github.com/Seicram/Tech-Blog"
        />
        <Project
          title="Strain Finder"
          image="Project2.jpg"
          description="This project is a web application that allows users to search for cannabis strains and dispensaries in their area. This application uses the Leafly API and the Google Maps API. This application uses Node.js, Express.js, Handlebars.js, and Sequelize."
          deployedLink=" https://strain-finder-app.herokuapp.com"
          githubLink="https://github.com/A-Witthohn/Strain-Finder.git"
        />
        <Project
          title="Regex Tutorial"
          image="Module17.jpg"
          description="This application is a tutorial that explains the function of a regular expression. This application is deployed on GitHub gist."
          deployedLink="https://gist.github.com/Seicram/9a2f63204a69ee063f33db3f23ee1cd0"
          githubLink="https://github.com/Seicram/Regex-Tutorial"
        />
        <Project
          title="Social Network API"
          image="Module18.jpg"
          description="This application is a social network API that uses a NoSQL database. This application allows users to share their thoughts, react to friends’ thoughts, and create a friend list."
          deployedLink="https://example.com/Social Network API"
          githubLink="https://github.com/Seicram/Social-Network-API"
        />
        <Project
          title="Text Editor"
          image="Module19.jpg"
          description="This application is a text editor that allows the user to create, edit, and save text files. This application uses Node.js, Electron, and the Ace editor."
          deployedLink="https://example.com/Text Editor"
          githubLink="https://github.com/Seicram/Text-Editor"
        />
        <Project
          title="React Portfolio"
          image="Module20.jpg"
          description="This application is a portfolio that uses React. This application uses React components, JSX, and React props."
          deployedLink="https://example.com/React Portfolio"
          githubLink="https://github.com/Seicram/React-Portfolio"
        />
        <Project
          title="Book Search Engine"
          image="Module21.jpg"
          description="This application is a book search engine that uses the Google Books API. This application uses the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API."
          deployedLink="https://example.com/Book Search Engine"
          githubLink="https://example.com/Book-Search-Engine"
        />
        <Project
          title="Extra Credit Assignment"
          image="Module22.jpg"
          description="This application is an extra credit assignment."
          deployedLink="https://example.com/Extra Credit Assignment"
          githubLink="https://example.com/Extra Credit Assignment"
        />
        <Project
          title="Project 3"
          image="Project3.jpg"
          deployedLink="https://example.com/project3"
          githubLink="https://example.com/Project-3"
        />
        </div>
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
