// Education.js
import React from 'react';
import '../styles/Education.css';
import collegeImage from '../images/clg.jpg'; // Replace with the actual image path

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>

      <div className="education-details">
        <h3>Rajasthan Technical University</h3>
        <p>B.Tech</p>
        <p>Electronics & Communication Engineer</p>
        <p>Jaipur/Rajasthan</p>
        {/* Add more education details as needed */}
      </div>

      <div className="college-image-container">
        <img src={collegeImage} alt="College" loading="lazy" />
      </div>
    </div>
  );
};

export default Education;
