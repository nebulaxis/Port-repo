// TechnologyCard.js

import React from 'react';
import '../styles/TechnologyCard.css';

const TechnologyCard = ({ name, icon, timeSpent, description }) => {
  return (
    <div className="technology-card">
      <i className={icon}></i>
      <div className="technology-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Time Spent: {timeSpent}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
