// Contact.js

import React from 'react';
import '../styles/Contact.css';
import backgroundImage from '../images/ryuga.png';

const Contact = () => {
  const yourPhoneNumber = "+91 9001234371";
  const yourEmail = "aakashdhardubey7820991638@gmail.com";

  return (
  <div className='cont'>
    <div className="contact-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={backgroundImage}
          alt="Your Name"
        />
      </div>

      <h2>Contact Me</h2>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${yourEmail}`}>{yourEmail}</a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${yourPhoneNumber}`}>{yourPhoneNumber}</a>
        </p>
      </div>

      <form className="contact-form">
        {/* Your form fields go here */}
        {/* For example:
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
        </div>
        <button type="submit">Submit</button>
        */}
      </form>
    </div>
  </div>
  );
};

export default Contact;
