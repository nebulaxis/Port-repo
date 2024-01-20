// components/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import githubImage from '../images/git.png';  // Adjust the path based on your project structure
import linkedinImage from '../images/linkedin.png';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-body');
    
    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div className="home-container">
       <header className="header">
        <h1>Aakash</h1>
        <p className="developer-description">Full Stack Web-App Developer</p>
        <p>
          Welcome to My Portfolio! I'm a robust type web Application developer. I love building web applications that make a difference.
          Explore my Projects, Blogs to learn more about me. Check out my{' '}
          <Link to="/about">About</Link> page, view my work{' '}
          , or get in touch with{' '} me Free to Contact Me.
        </p>
      </header>
      <section className="additional-sections">
        {/* Responsive Section Links */}
        <div className="section-links responsive-links">
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/education">Education</Link>
          <Link to="/interests">Interests</Link>
          <Link to="/work-experience">Work Experience</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
      <footer className="footer">
        <div>
          <p>&copy; 2024 Dev-Port</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/nebulaxis" target="_blank" rel="noopener noreferrer">
    <img src={githubImage} alt="GitHub" />
    <span>GitHub</span>
  </a>
  <a href="https://www.linkedin.com/in/aakash-dhar-dubey-90s" target="_blank" rel="noopener noreferrer">
    <img src={linkedinImage} alt="LinkedIn" />
    <span>LinkedIn</span>
  </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
