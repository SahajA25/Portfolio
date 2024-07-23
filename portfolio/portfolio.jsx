// src/Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <h1 className="animate__animated animate__fadeInDown">Your Name</h1>
        <p className="subtitle animate__animated animate__fadeInDown">Web Developer</p>
      </header>

      <section className="projects">
        <div className="project animate__animated animate__fadeIn">
          <h2>Project 1</h2>
          <p>Description of Project 1</p>
        </div>

        <div className="project animate__animated animate__fadeIn">
          <h2>Project 2</h2>
          <p>Description of Project 2</p>
        </div>

        {/* Add more projects as needed */}
      </section>

      <footer>
        <p className="animate__animated animate__fadeInUp">Connect with me on social media:</p>
        {/* Add social media icons with links */}
      </footer>
    </div>
  );
};

export default Portfolio;
