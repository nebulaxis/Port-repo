// Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

// Import project images
import project1Image from '../images/q.jpg';
import project2Image from '../images/w.png';
import project3Image from '../images/e.png';
import project4Image from '../images/r.jpg';
import bigImage1 from '../images/aw.png'; // New image
import bigImage2 from '../images/nw.png'; // New image
import bigImage3 from '../images/sw.png'; // New image

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: project1Image,
    // other project details
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: project2Image,
    // other project details
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3',
    image: project3Image,
    // other project details
  },
  {
    title: 'Project 4',
    description: 'Description for Project 4',
    image: project4Image,
    // other project details
  },
];

const bigImagesData = [
  {
    image: bigImage1,
    // other details if needed
  },
  {
    image: bigImage2,
    // other details if needed
  },
  {
    image: bigImage3,
    // other details if needed
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      {/* Video Container */}
      <div className="video-container">
        <iframe
          title="Project Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iBlFgwWUoDU"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p className="video-description">Animated car highway Video using blender 3d model </p>
      </div>

      {/* Big Grid for Project Cards */}
      <div className="big-grid-container">
        {projectsData.map((project, index) => (
          <div key={index} className="big-project-card">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Big Images at the bottom */}
      <div className="big-images-container">
        {bigImagesData.map((bigImage, index) => (
          <div key={index} className="big-image-card">
            <img
              src={bigImage.image}
              alt={`Big Image ${index + 1}`}
              className="big-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
