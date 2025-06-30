// src/components/ProjectsSection.jsx

import React from 'react';
import './ProjectsSection.css';
import { FaMicrosoft, FaTools, FaNetworkWired } from 'react-icons/fa';

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        
        {/* Project 1 */}
        <div className="project-card">
          <h3><FaMicrosoft /> Azure Infrastructure Automation</h3>
          <p>Deployed scalable infrastructure using Azure Bicep and Terraform for high-availability applications.</p>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3><FaTools /> CI/CD Pipeline with Azure DevOps</h3>
          <p>Implemented a fully automated CI/CD pipeline with Azure Repos, Pipelines, and Release stages.</p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3><FaNetworkWired /> Monitoring & Logging</h3>
          <p>Set up Azure Monitor and Log Analytics for centralized monitoring and alerting on cloud services.</p>
        </div>
        {/* Additional Highlighted Projects */}
<div className="mt-12">
  <h3 className="text-2xl font-bold text-center mb-6 text-purple-700">Featured Projects</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Project: Authentication App */}
    <div className="bg-purple-100 p-5 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-purple-900">Authentication App</h4>
      <p className="text-gray-700 mb-3">User login/register system using Firebase.</p>
      <a
        href="https://team1authapp.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-800 hover:underline font-medium"
      >
        🔗 View Project
      </a>
    </div>

    {/* Project: A.M.E Foresight Shop */}
    <div className="bg-purple-100 p-5 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-purple-900">A.M.E Foresight Shop</h4>
      <p className="text-gray-700 mb-3">Responsive e-commerce frontend with HTML, CSS & JS.</p>
      <a
        href="https://ameforesight.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-800 hover:underline font-medium"
      >
        🔗 View Project
      </a>
    </div>

    {/* Project: iCalculator App */}
    <div className="bg-purple-100 p-5 rounded-lg shadow-lg">
      <h4 className="text-xl font-semibold mb-2 text-purple-900">iCalculator App</h4>
      <p className="text-gray-700 mb-3">A modern calculator built with JavaScript.</p>
      <a
        href="https://icalculatorapp.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-800 hover:underline font-medium"
      >
        🔗 View Project
      </a>
    </div>

  </div>
</div>


      </div>
    </section>
  );
};

export default ProjectsSection;
