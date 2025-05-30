import React from 'react';
import { 
  FaLaptopCode, 
  FaUniversity, 
  FaGraduationCap, 
  FaSchool,
  FaDownload,
  FaEye,
  FaStar,
  FaCode,
  FaDatabase,
  FaReact,
  FaJava,
  FaPython
} from 'react-icons/fa';
import { HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';
import { BsFileEarmarkPdf, BsPerson, BsAward } from 'react-icons/bs';
import { SiSpringboot, SiMongodb, SiMysql } from 'react-icons/si';
import SG from '../assets/SG Resume.pdf';
import './About.css';

const About = () => {
  const handleViewResume = () => {
    window.open("/SG Resume.pdf", "_blank");
  };
  

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/SG Resume.pdf'; // Path to your resume file
    link.download = 'Sravanthi_Resume.pdf';
    link.click();
  };

  const skills = [
    { name: 'React & JavaScript', icon: <FaReact /> },
    { name: 'Java & Spring Boot', icon: <FaJava /> },
    { name: 'Python Development', icon: <FaPython /> },
    { name: 'Database Systems', icon: <FaDatabase /> }
  ];

  return (
    <div className="about-section" id="about">
      {/* Main Content - About Me and Resume Side by Side */}
      <section className="main-content-section">
        {/* About Me Section */}
        <div className="description-section">
          <div className="section-header">
            <BsPerson className="header-accent" />
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="content-box">
            <div className="about-content">
              <div className="intro-section">
                <p className="intro-text">
                  I am a dedicated <strong>Full Stack Developer</strong> with comprehensive expertise 
                  in designing and implementing scalable web applications across the entire technology stack.
                </p>
              </div>

              <div className="professional-summary">
                <h4 className="summary-title">Professional Summary</h4>
                <p className="summary-text">
                  My technical proficiency encompasses modern frontend frameworks including <strong>React</strong> 
                  and <strong>JavaScript</strong>, complemented by robust backend development skills in 
                  <strong>Java</strong> with <strong>Spring Boot</strong> and <strong>Python</strong>. 
                  I possess extensive experience in database design and management utilizing both 
                  <strong>MySQL</strong> and <strong>MongoDB</strong> systems.
                </p>
              </div>
              
              <div className="skills-showcase">
                <h4 className="skills-title">Core Technical Competencies</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="experience-section">
                <h4 className="experience-title">Industry Experience</h4>
                <p className="experience-text">
                  Throughout my academic and professional journey, I have collaborated with 
                  prestigious organizations including <strong>Big Tech</strong>, <strong>Intel Corporation</strong>, 
                  and <strong>TELI</strong>, gaining valuable exposure to enterprise-level software 
                  development methodologies and industry best practices.
                </p>
              </div>
              
              <div className="mission-section">
                <p className="mission-text">
                  I am committed to delivering innovative, high-quality software solutions that 
                  address complex business requirements while maintaining optimal performance, 
                  security, and user experience standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="resume-section">
          <div className="section-header">
            <BsFileEarmarkPdf className="header-accent" />
            <h2 className="section-title">Resume</h2>
          </div>
          
          <div className="resume-container">
            <div className="resume-card">
              <div className="resume-visual">
                <div className="resume-icon-wrapper">
                  <BsFileEarmarkPdf className="resume-main-icon" />
                  <div className="icon-glow"></div>
                </div>
                <div className="resume-badge">
                  <BsAward className="badge-icon" />
                  <span>Professional</span>
                </div>
              </div>
              
              <div className="resume-content">
                <h3 className="resume-title">Professional Portfolio</h3>
                <p className="resume-description">
                  Comprehensive documentation of my technical expertise, project portfolio, 
                  academic achievements, and professional experience in software development.
                </p>

                <div className="resume-actions">
                  <button 
                    className="resume-btn view-btn"
                    onClick={handleViewResume}
                  >
                    <FaEye />
                    <span>View Online</span>
                  </button>
                  
                  <button 
                    className="resume-btn download-btn"
                    onClick={handleDownloadResume}
                  >
                    <FaDownload />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Journey Section */}
      <section className="education-section">
        <div className="section-header">
          <FaStar className="header-accent" />
          <h2 className="section-title">Academic Journey</h2>
          <FaStar className="header-accent" />
        </div>
        
        <div className="education-timeline">
          <div className="education-cards">
            <div className="edu-card current">
              <div className="edu-status">Current</div>
              <div className="edu-icon-wrapper">
                <FaUniversity className="edu-icon" />
              </div>
              <div className="edu-details">
                <h3 className="edu-title">Bachelor of Technology</h3>
                <p className="edu-field">Computer Science & Engineering</p>
                <p className="edu-institute">Centurion University of Technology and Management</p>
                <div className="edu-meta">
                  <span className="edu-duration">2022 – 2026</span>
                  <span className="edu-score excellent">CGPA: 8.7</span>
                </div>
                <div className="progress-section">
                  <div className="progress-indicator">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width: '75%'}}></div>
                    </div>
                    <span className="progress-text">75% Completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-icon-wrapper">
                <FaGraduationCap className="edu-icon" />
              </div>
              <div className="edu-details">
                <h3 className="edu-title">Higher Secondary Education</h3>
                <p className="edu-field">Mathematics, Physics, Chemistry</p>
                <p className="edu-institute">Sri Chaitanya College</p>
                <div className="edu-meta">
                  <span className="edu-duration">2020 – 2022</span>
                  <span className="edu-score good">78%</span>
                </div>
                <div className="achievement-badge">
                  <span>Science Stream</span>
                </div>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-icon-wrapper">
                <FaSchool className="edu-icon" />
              </div>
              <div className="edu-details">
                <h3 className="edu-title">Secondary Education</h3>
                <p className="edu-field">Science & Mathematics</p>
                <p className="edu-institute">Sri Chaitanya School</p>
                <div className="edu-meta">
                  <span className="edu-duration">Completed 2020</span>
                  <span className="edu-score outstanding">98%</span>
                </div>
                <div className="achievement-badge outstanding">
                  <BsAward className="achievement-icon" />
                  <span>Outstanding Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;