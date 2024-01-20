// About.js

import React from 'react';
import '../styles/About.css';
import profileImage from '../images/ryuga.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-picture">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="info">
        <h2>About Me</h2>
        <p>
          Hello! I'm Aakash , an enthusiastic Full Stack Web Application developer with a proven track record in constructing responsive and user-friendly web applications. I derive immense satisfaction from transforming concepts into tangible realities through code, and I am dedicated to continuous learning and skill enhancement.
        </p>
        <p>
          My expertise extends to the development of Cross/Native Web Applications across various platforms, including Mac, Android, and Desktop. As a Backend developer, I proficiently manage the dynamic workflow of each page, facilitating seamless API calls through CRUD operations. Additionally, I excel in Database Management Systems, ensuring the efficient storage and analysis of every record.
        </p>
        <p>
          In summary, I am passionate about creating innovative web solutions, and my experience encompasses comprehensive backend management, API integration, and database proficiency to deliver robust and efficient applications.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>React.js</li>
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>Responsive Design</li>
          <li>Node.js/Express.js</li>
          <li>MongoDB</li>
          <li>Sql/NoSQL/GraphSqL</li>
          <li>Web-API</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Git/Github</li>
          <li>DSA</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
};

export default About;
