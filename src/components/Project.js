import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedLink}>Deployed Application</a>
      <a href={githubLink}>GitHub Repository</a>
    </div>
  );
};

export default Project;
