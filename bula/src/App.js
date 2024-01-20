// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';  
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/work-experience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
};

export default App;
