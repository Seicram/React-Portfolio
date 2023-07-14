import React from 'react';
import Project from './Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 style={{ textAlign: 'center' }}>Portfolio</h1>
      <div className="projects-container">
      <Project>
          title="Code Refactor"
          image="../img/coderefactor.png"
          description="This was to refactor the code for a website to make it more accessible."
          <a href="https://seicram.github.io/Code-Refactor/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Code-Refactor" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Project>
        <Project>
          title="Professional Portfolio"
          image="../img/pp.png"
          description="This application is my professional portfolio. It contains information about me, my projects, and my contact information."
          <a href="https://seicram.github.io/Professional-Portfolio/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Professional-Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Project>
        <Project>
          title="Password Generator"
          image="../img/passgen.png"
          description="This application is a password generator that produces a random password based on user-selected criteria"
          <a href="https://seicram.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Password-Generator" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Code Quiz"
          image="../img/codequiz.png"
          description="This application is a timed coding quiz with multiple-choice questions that runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code."
          <a href="https://seicram.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Code-Quiz" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Work Day Scheduler"
          image="../img/worddsch.png"
          description="This application is a simple calendar that allows the user to save events for each hour of the day."
          <a href="https://seicram.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Weather Dashboard"
          image="../img/weather.png"
          description="This application is a weather dashboard that will run in the browser and returns current and future weather conditions for a city that the user inputs."
          <a href="https://seicram.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Weather-Dashboard" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Project 1"
          image="../img/project1.png"
          description="This project is a trivia game that uses JavaScript for the logic and jQuery to manipulate HTML. The game is timed and the player has 30 seconds to answer each question."
          <a href="https://seicram.github.io/Trivia-Game/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Trivia-Game" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Professional README Generator"
          image="../img/readgen.png"
          description="This application can be used to generate a professional README file. This application uses Node.js and the Inquirer package."
          <a href="https://drive.google.com/file/d/1rbYl8EnpOadKCG-fVWsFafVW2oySTYUk/view" target="_blank" rel="noopener noreferrer">Video</a>
          <a href="https://github.com/Seicram/Professional-README-Generator" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="SVG Logo Maker"
          image="../img/svglogo.png"
          description="This application can be used to create a logo using SVG elements. This application uses Node.js, Inquirer, and SVG.js."
          <a href="https://drive.google.com/file/d/1So-WQX4MdkvM_4VQFqJXwZ4IC_YpS-UC/view" target="_blank" rel="noopener noreferrer">Video</a>
          <a href="https://github.com/Seicram/SVG-Logo-Maker-" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Note Taker"
          image="../img/notetaker.png"
          description="This application can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file."
          <a href="https://note-taker-smith.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Note-Taker" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Employee Tracker"
          image="../img/employee.png"
          description="This application can be used to manage a company's employees using node, inquirer, and MySQL. This application allows the user to view and manage the departments, roles, and employees in the company."
          <a href=" https://drive.google.com/file/d/1Ab8MbkMVzPaKA-zCN4lqUoPPHxh4etNb/view" target="_blank" rel="noopener noreferrer">Video</a>
          <a href="https://github.com/Seicram/Employee-Tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="E-commerce Back End"
          image="../img/ecommerce.png"
          description="This application can be used to manage the back end of an e-commerce site. This application uses Express.js API and Sequelize to interact with a MySQL database."
          <a href="https://drive.google.com/file/d/19U_q5wNIbvS7Db3rHW7KwA2PSD8MOJJe/view" target="_blank" rel="noopener noreferrer">Video</a>
          <a href="https://github.com/Seicram/E-commerce-Back-End" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Tech Blog"
          image="../img/tech.png"
          description="This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well."
          <a href="https://tech-blog-smith.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Tech-Blog" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Strain Finder"
          image="../img/p2.png"
          description="This project is a web application that allows users to search for cannabis strains and pair with an activity. This application uses the Leafly API and the Google Maps API. This application uses Node.js, Express.js, Handlebars.js, Agify, and Sequelize."
          <a href=" https://strain-finder-app.herokuapp.com" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/A-Witthohn/Strain-Finder.git" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Regex Tutorial"
          image="../img/regex.png"
          description="This application is a tutorial that explains the function of a regular expression. This application is deployed on GitHub gist."
          <a href="https://gist.github.com/Seicram/9a2f63204a69ee063f33db3f23ee1cd0" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Regex-Tutorial" target="_blank" rel="noopener noreferrer">GitPages</a>
          </Project>
        <Project>
          title="Social Network API"
          image="../img/social.png"
          description="This application is a social network API that uses a NoSQL database. This application allows users to share their thoughts, react to friends’ thoughts, and create a friend list."
          <a href="https://example.com/Social Network API" target="_blank" rel="noopener noreferrer">N/A</a>
          <a href="https://github.com/Seicram/Social-Network-API" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Text Editor"
          image="../img/texteditor.png"
          description="This application is a text editor that allows the user to create, edit, and save text files. This application uses Node.js, Electron, and the Ace editor."
          <a href="https://text-editor-smith-e70e0b0c60df.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/Text-Editor" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="React Portfolio"
          image="../img/react.png"
          description="This application is a portfolio that uses React. This application uses React components, JSX, and React props."
          <a href="https://react-portfolio-smith-6c019288755c.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/Seicram/React-Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Book Search Engine"
          image="../img/booksearch.png"
          description="This application is a book search engine that uses the Google Books API. This application uses the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API."
          <a href="https://example.com/Book Search Engine" target="_blank" rel="noopener noreferrer">N/A</a>
          <a href="https://github.com/Seicram/Book-Search-Engine" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        <Project>
          title="Extra Credit Assignment"
          image="../img/extra.png"
          description="This application is an extra credit assignment."
          <a href="https://example.com/Extra Credit Assignment" target="_blank" rel="noopener noreferrer">N/A</a>
          <a href="https://example.com/Extra Credit Assignment" target="_blank" rel="noopener noreferrer">N/A</a>
          </Project>
        <Project>
          title="JourneyVerse"
          image="../img/JourneyVerse.png"
          description="Simplifying travel planning and logistics with friends through collaborative trip coordination in one intuitive app."
          <a href="https://journeyverse-2c53482d7e17.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
          <a href="https://github.com/pexApred/journeyVerse" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Project>
        {/* Add more projects */}
      </div>
    </section>
  );
};

export default Portfolio;
