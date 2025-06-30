// src/components/HeroSection.jsx

import React from 'react';
import './HeroSection.css'; // Make sure this CSS file exists

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src="/agbaje.jpg" alt="profile" className="hero-image" />
      <h1 className="hero-name">Agbaje Isaac Adekunle</h1>
      <h2 className="hero-title">Azure Cloud & DevOps Engineer</h2>
      <p className="hero-description">
        I specialize in deploying scalable cloud applications and automating workflows using Azure and DevOps tools.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="hero-btn">View Projects</a>
        <a href="#contact" className="hero-btn">Contact Me</a>
      </div>
    </div>
  );
};

export default HeroSection;
