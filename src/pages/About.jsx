import React from "react";
import {
  FaLaptopCode,
  FaUniversity,
  FaGraduationCap,
  FaSchool,
  FaDownload,
  FaEye,
  FaCode,
  FaDatabase,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { BsFileEarmarkPdf, BsPerson } from "react-icons/bs";
import "./About.css";

const About = () => {
  const handleViewResume = () => {
    window.open("/SG Resume.pdf", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SG Resume.pdf";
    link.download = "Sravanthi_Resume.pdf";
    link.click();
  };

  const skills = [
    { name: "React & JavaScript", icon: <FaReact /> },
    { name: "Java & Spring Boot", icon: <FaJava /> },
    { name: "Python Development", icon: <FaPython /> },
    { name: "Database Systems", icon: <FaDatabase /> },
  ];

  return (
    <div className="about-section" id="about">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Professional Summary */}
          <div className="summary-card">
            <h3 className="card-title">Professional Summary</h3>
            <p className="summary-text">
              Full Stack Developer with expertise in modern web technologies
              including React, JavaScript, Java with Spring Boot, and Python.
              Experienced in database design and management with MySQL and
              MongoDB. Proven track record of delivering scalable web
              applications and collaborating with enterprise-level
              organizations.
            </p>

            <div className="skills-section">
              <h4 className="skills-title">Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="experience-highlight">
              <h4 className="experience-title">Industry Experience</h4>
              <p className="experience-text">
                Collaborated with prestigious organizations including Big Tech,
                Intel Corporation, and TELI, gaining valuable exposure to
                enterprise software development practices and industry
                standards.
              </p>
            </div>
          </div>

          {/* Resume Card */}
          <div className="resume-card">
            <div className="resume-header">
              <BsFileEarmarkPdf className="resume-icon" />
              <h3 className="resume-title">Resume</h3>
            </div>
            <p className="resume-description">
              Download or view my comprehensive professional resume containing
              detailed information about my experience, projects, and
              qualifications.
            </p>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleViewResume}>
                <FaEye />
                <span>View Resume</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleDownloadResume}
              >
                <FaDownload />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="section-subtitle">Education</h3>
          <div className="education-grid">
            <div className="education-item current">
              <div className="edu-header">
                <FaUniversity className="edu-icon" />
                <div className="edu-status">Current</div>
              </div>
              <h4 className="edu-degree">Bachelor of Technology</h4>
              <p className="edu-field">Computer Science & Engineering</p>
              <p className="edu-institution">
                Centurion University of Technology and Management
              </p>
              <div className="edu-details">
                <span className="edu-period">2022 – 2026</span>
                <span className="edu-grade">CGPA: 8.9</span>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-header">
                <FaGraduationCap className="edu-icon" />
              </div>
              <h4 className="edu-degree">Higher Secondary Education</h4>
              <p className="edu-field">Mathematics, Physics, Chemistry</p>
              <p className="edu-institution">Sri Chaitanya College</p>
              <div className="edu-details">
                <span className="edu-period">2020 – 2022</span>
                <span className="edu-grade">78%</span>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-header">
                <FaSchool className="edu-icon" />
              </div>
              <h4 className="edu-degree">Secondary Education</h4>
              <p className="edu-field">Science & Mathematics</p>
              <p className="edu-institution">Sri Chaitanya School</p>
              <div className="edu-details">
                <span className="edu-period">Completed 2020</span>
                <span className="edu-grade">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
