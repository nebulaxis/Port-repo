// WorkExperience.js

import React from 'react';
import '../styles/WorkExperience.css';
import professionalAutomotivesImage from '../images/trans.jpg';
import ecowiserImage from '../images/foodi.jpg';

const WorkExperience = () => {
  return (
  <div className='expo'>
    <div className="work-experience-container">
      <h2>Work Experience</h2>

      {/* Professional Automotives */}
      <div className="work-entry">
        <h3>Professional Automotives</h3>
        <img
          className="company-image"
          src={professionalAutomotivesImage}
          alt="Professional Automotives"
        />
        <p className="position">Full Stack web Developer</p>
        <p className="date">April 2023 - August 2023</p>
        <ul>
          <li>Developed and maintained web applications using Java (Swing) for the frontend and Javascript for the backend.</li>
          <li>Collaborated with cross-functional teams to design and implement new features and maintain dependencies.</li>
          <li>Participated in code reviews and provided constructive feedback to team members and maintain databases of trucks and drivers.</li>
        </ul>
      </div>

      {/* Ecowiser */}
      <div className="work-entry">
        <h3>Ecowiser</h3>
        <img
          className="company-image"
          src={ecowiserImage}
          alt="Ecowiser"
        />
        <p className="position">Project Assignment Freelancing</p>
        <p className="date">October 2023 - November 2023</p>
        <ul>
          <li>Get the Assignment to develop Food-Recipe web page where customers book their foods </li>
          <li>Integrated third-party APIs to enhance system functionality and Place Order according to Address.</li>
          <li>Worked closely with UX/UI designers to create responsive and user-friendly interfaces, and store data of recipes into Databases.</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default WorkExperience;
