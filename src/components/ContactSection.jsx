// src/components/ContactSection.jsx

import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        I'm open to new opportunities and collaborations in Cloud and DevOps. Feel free to reach out!
      </p>
      <div className="contact-info">
        <a 
          href="mailto:adekunleisaac1989@gmail.com" 
          className="contact-link" 
          aria-label="Email"
        >
          📧 adekunleisaac1989@gmail.com
        </a>
        <a 
          href="https://wa.me/2348142723736" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
          aria-label="WhatsApp"
        >
          💬 WhatsApp: +234 814 272 3736
        </a>
        <a 
          href="https://linkedin.com/in/YOUR-LINKEDIN" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
          aria-label="LinkedIn"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
