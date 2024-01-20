// ProjectCard.js

import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, image /* other project details */ }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={image} alt={title} className="project-image" />
      <p>{description}</p>
      {/* Render other project details here */}
    </div>
  );
};

export default ProjectCard;
