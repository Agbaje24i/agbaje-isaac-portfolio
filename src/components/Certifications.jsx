// src/components/Certifications.jsx
import './Certifications.css';
import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <ul className="certifications-list">
        <li>
          AZ-104: Microsoft Certified Azure Administrator Associate
          <span className="italic text-sm"> (in progress)</span>
        </li>
        <li>
          Git & GitHub for Developers - HNG Internship
          <span className="text-sm"> (2025)</span>
        </li>
        <li>
          Cloud Engineering Internship - Ceeitsolution
          <span className="text-sm"> (2025)</span>
        </li>
        <li>
          DevOps Engineering Internship - Kodecamp
          <span className="text-sm"> (2025)</span>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
