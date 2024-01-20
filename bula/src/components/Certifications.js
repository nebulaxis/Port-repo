// Certifications.js
import React from 'react';
import '../styles/Certifications.css';

const certificationsData = [
  { title: 'Full Stack Web Java', organization: 'Udemy', date: '2019' },
  { title: 'Front-Ent', organization: 'LearnVern', date: '2019' },
  { title: 'Data-Science', organization: 'GoedHub-Technologies', date: '2020' },
  { title: 'Ethical -Hacking Workshop', organization: 'IIT-Jodhpur', date: '2020' },
  { title: 'Machine Learning', organization: 'Internshala', date: '2021' },
  { title: 'Certification Title 6', organization: 'Organization Name 6', date: 'Issue Date 6' },
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2>Certifications</h2>

      {certificationsData.slice(0, 5).map((certification, index) => (
        <div key={index} className="certification">
          {/* Remove the image tag */}
          <div className="certification-details">
            <h3>{certification.title}</h3>
            <p>Issuing Organization: {certification.organization}</p>
            <p>Date: {certification.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
