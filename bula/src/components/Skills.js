// Skills.js

import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
  <div className="skills-page">
    <div className="skills-container">
      <h2>Skills</h2>

      {/* Programming Languages */}
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>Git</li>
        </ul>
      </div>

      {/* Frontend Technologies */}
      <div className="skills-category">
        <h3>Frontend Technologies</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>Angular</li>
          <li>HTML5/CSS3</li>
        </ul>
      </div>

      {/* Backend Technologies */}
      <div className="skills-category">
        <h3>Backend Technologies</h3>
        <ul className="skills-list">
          <li>Node.js</li>
          <li>Django</li>
          <li>Express.js</li>
        </ul>
      </div>

      {/* Database */}
      <div className="skills-category">
        <h3>Database</h3>
        <ul className="skills-list">
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

    </div>
  </div>
  );
};

export default Skills;
