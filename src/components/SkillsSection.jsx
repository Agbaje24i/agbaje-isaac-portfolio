import React from "react";
import './SkillsSection.css';
import { FaMicrosoft, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";
import { SiTerraform, SiGithub } from "react-icons/si"; // Removed SiAzuredevops

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-item"><FaMicrosoft /> Azure</div>
        <div className="skill-item"><FaMicrosoft /> Azure DevOps</div>
        <div className="skill-item"><SiTerraform /> Terraform</div>
        <div className="skill-item"><FaGitAlt /> Git</div>
        <div className="skill-item"><SiGithub /> GitHub</div>
        <div className="skill-item"><FaDocker /> Docker</div>
        <div className="skill-item"><FaLinux /> Linux</div>
      </div>
    </section>
  );
};

export default SkillsSection;
