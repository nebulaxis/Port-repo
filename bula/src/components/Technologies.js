// Technologies.js

import React from 'react';
import TechnologyCard from '../components/TechnologyCard';
import '../styles/Technologies.css';

const Technologies = () => {
  const technologiesData = [
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      timeSpent: '2 years', 
      description: 'A JavaScript library for building user interfaces.' 
    },
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js', 
      timeSpent: '2 years', 
      description: 'A high-level, interpreted programming language.' 
    },
    { 
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      timeSpent: '1 years', 
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' 
    },
    { 
      name: 'Express.js,Web-APIs', 
      icon: 'fas fa-server', 
      timeSpent: '1 years', 
      description: 'A minimal and flexible Node.js web application framework.' 
    },
    { 
      name: 'MongoDB', 
      icon: 'fas fa-database', 
      timeSpent: '1 year', 
      description: 'A cross-platform document-oriented database program.' 
    },
    { 
      name: 'Redux', 
      icon: 'fab fa-redux', 
      timeSpent: '1 year', 
      description: 'A predictable state container for JavaScript apps.' 
    },
    { 
      name: 'Java', 
      icon: 'fab fa-sass', 
      timeSpent: '2 year', 
      description: 'A popular CSS preprocessor scripting language.' 
    },
    { 
      name: 'Webpack', 
      icon: 'fab fa-webpack', 
      timeSpent: '1 year', 
      description: 'A static module bundler for modern JavaScript applications.' 
    },
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      timeSpent: '2 years', 
      description: 'A distributed version control system.' 
    },
    { 
      name: 'SQL/NoSQL/GraphQL', 
      icon: 'fab fa-graphql', 
      timeSpent: '2 year', 
      description: 'A query language for APIs and a runtime for executing those queries with existing data.' 
    },
    // Add 10 more technologies as needed
  ];

  return (
  <div className='tech'>
    <div className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-list">
        {technologiesData.map((technology, index) => (
          <TechnologyCard key={index} {...technology} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Technologies;
