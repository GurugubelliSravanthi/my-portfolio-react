import React from 'react';
import './Skills.css';
import {
  FaJava, FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaDatabase, FaGitlab, FaTerminal, FaTools
} from 'react-icons/fa';
import {
  SiSpringboot, SiPostman, SiMongodb, SiMysql, SiVercel, SiMacos
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillSections = [
  {
    title: "Programming Languages",
    icon: <FaDatabase className="section-icon" style={{ color: '#f0db4f' }} />,
    skills: [
      { name: 'Java', icon: <FaJava className="skill-icon" style={{ color: '#007396' }} /> },
      { name: 'Python', icon: <FaPython className="skill-icon" style={{ color: '#3776AB' }} /> },
      { name: 'JavaScript', icon: <FaJs className="skill-icon" style={{ color: '#f0db4f' }} /> },
    ],
  },
  {
    title: "Frontend & Backend Tools",
    icon: <FaReact className="section-icon" style={{ color: '#61DBFB' }} />,
    skills: [
      { name: 'React', icon: <FaReact className="skill-icon" style={{ color: '#61DBFB' }} /> },
      { name: 'HTML', icon: <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} /> },
      { name: 'CSS', icon: <FaCss3Alt className="skill-icon" style={{ color: '#1572B6' }} /> },
      { name: 'Git', icon: <FaGitAlt className="skill-icon" style={{ color: '#F05032' }} /> },
      { name: 'GitHub', icon: <FaGithub className="skill-icon" style={{ color: '#181717' }} /> },
      { name: 'Postman', icon: <SiPostman className="skill-icon" style={{ color: '#FF6C37' }} /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="skill-icon" style={{ color: '#6DB33F' }} /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="section-icon" style={{ color: '#4479A1' }} />,
    skills: [
      { name: 'MySQL', icon: <SiMysql className="skill-icon" style={{ color: '#4479A1' }} /> },
      { name: 'MongoDB', icon: <SiMongodb className="skill-icon" style={{ color: '#47A248' }} /> },
    ],
  },
  {
    title: "Tools and Platforms",
    icon: <FaTools className="section-icon" style={{ color: '#4B0082' }} />,
    skills: [
      { name: 'Git', icon: <FaGitAlt className="skill-icon" style={{ color: '#F05032' }} /> },
      { name: 'GitHub', icon: <FaGithub className="skill-icon" style={{ color: '#181717' }} /> },
      { name: 'GitLab', icon: <FaGitlab className="skill-icon" style={{ color: '#FC6D26' }} /> },
      { name: 'Terminal', icon: <FaTerminal className="skill-icon" style={{ color: '#000000' }} /> },
      { name: 'VS Code', icon: <VscCode className="skill-icon" style={{ color: '#007ACC' }} /> },
      { name: 'Vercel', icon: <SiVercel className="skill-icon" style={{ color: '#000000' }} /> },
      { name: 'macOS', icon: <SiMacos className="skill-icon" style={{ color: '#000000' }} /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-page">
      {skillSections.map((section, idx) => (
        <div className="skill-section" key={idx}>
          <div className="section-header">
            {section.icon}
            <h2>{section.title}</h2>
          </div>
          <div className="skill-grid">
            {section.skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon}
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
