import React from 'react';
import './Project.css';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
        <img src={process.env.PUBLIC_URL + '/images/' + image} alt={title} />
        </div>
        <div className="project-card-back">
          <h3>{title}</h3>
          <div className="project-links">
            <a href={deployedLink}>Deployed Application</a>
            <a href={githubLink}>GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
