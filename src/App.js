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
        <img src="./public/img/profilepic.png" alt="Developer Avatar" />

          <p>I am a military veteran with a demonstrated track record of excellence in various roles. Currently employed as an IT Specialist at the US Environmental Protection Agency, I provide support in application software development and coding. I have certifications in IT with commitment to continuous academic growth. My leadership skills and commitment to personal and professional development make me a valuable asset. I have experience managing programs and ensuring compliance in the healthcare sector. With strong problem-solving, communication, and technical skills, I excel in delivering results and contributing to organizational success. </p>
        </div>
      </section>
      <section id="portfolio">
        {/* Portfolio section */}
        <h2>Portfolio</h2>
        {/* Render multiple instances of Project component with project data */}
        <div className="projects-container">
        <Project
          title="Module 1"
          image="Module1.jpg"
          deployedLink="https://example.com/project1"
          githubLink="https://github.com/username/project1"
        />
        <Project
          title="Module 2"
          image="Module2.jpg"
          deployedLink="https://example.com/project2"
          githubLink="https://github.com/username/project2"
        />
        <Project
          title="Module 3"
          image="Module3.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
                <Project
          title="Module 4"
          image="Module4.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 5"
          image="Module5.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 6"
          image="Module6.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Project 1"
          image="project1.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 9"
          image="Module9.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 10"
          image="Module10.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 11"
          image="Module11.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 12"
          image="Module12.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 13"
          image="Module13.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 14"
          image="Module14.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Project 2"
          image="Project2.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 17"
          image="Module17.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 18"
          image="Module18.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 19"
          image="Module19.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 20"
          image="Module20.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 21"
          image="Module21.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Module 22"
          image="Module22.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
        />
        <Project
          title="Project 3"
          image="Project3.jpg"
          deployedLink="https://example.com/project3"
          githubLink=""
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
