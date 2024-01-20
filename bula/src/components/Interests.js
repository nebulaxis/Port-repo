// Interests.js

import React from 'react';
import '../styles/Interests.css';

// Import images
import image1 from '../images/1.jpg';
import image3 from '../images/3.png';
import imageRyuga from '../images/ryuga.png';

const interestsData = [
  { image: image1, title: 'Software Tools' },
  { image: image3, title: 'Services' },
  { image: imageRyuga, title: 'Developer' },
];

const Interests = () => {
  return (
    <div className="interests-container">
      <h2>Interests</h2>

      <ul className="interests-list">
        {interestsData.map((interest, index) => (
          <li key={index} className="interest-item">
            <img
              src={interest.image}
              alt="Icon"
              className={`interest-icon ${interest.title === 'Services' ? 'services-image' : ''}`}
            />
            <p>{interest.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
