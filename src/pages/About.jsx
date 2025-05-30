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

const About = () => {
  const handleViewResume = () => {
    // Replace with your actual resume URL
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'YourName_Resume.pdf';
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
                
                <div className="resume-stats">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
                
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

      <style jsx>{`
        .about-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #fbcfe8 70%, #f3e8ff 100%);
          font-family: 'Inter', 'Segoe UI', sans-serif;
          color: #374151;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(219, 39, 119, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.04) 0%, transparent 40%);
          pointer-events: none;
        }

        /* Main Content Section - Side by Side */
        .main-content-section {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          max-width: 1400px;
          margin: 0 auto 100px auto;
          align-items: start;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }

        .header-accent {
          font-size: 1.8rem;
          color: #ec4899;
          animation: gentle-pulse 3s ease-in-out infinite;
        }

        @keyframes gentle-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #be185d;
          margin: 0;
          text-shadow: 0 2px 4px rgba(190, 24, 93, 0.1);
        }

        /* About Me Styles */
        .content-box {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          padding: 45px;
          border-radius: 24px;
          box-shadow: 
            0 25px 50px rgba(190, 24, 93, 0.1),
            0 1px 0px rgba(255, 255, 255, 0.9) inset;
          position: relative;
          border: 1px solid rgba(236, 72, 153, 0.15);
        }

        .intro-section {
          margin-bottom: 35px;
        }

        .intro-text {
          font-size: 1.3rem;
          font-weight: 600;
          color: #be185d;
          line-height: 1.7;
          margin: 0;
        }

        .professional-summary, .experience-section, .mission-section {
          margin-bottom: 30px;
        }

        .summary-title, .skills-title, .experience-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #be185d;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .summary-title::before, .skills-title::before, .experience-title::before {
          content: '';
          width: 4px;
          height: 20px;
          background: linear-gradient(to bottom, #ec4899, #be185d);
          border-radius: 2px;
        }

        .summary-text, .experience-text, .mission-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #4b5563;
          margin: 0;
        }

        .skills-showcase {
          margin: 35px 0;
          padding: 30px;
          background: linear-gradient(135deg, #fdf2f8, #fce7f3);
          border-radius: 20px;
          border: 1px solid rgba(236, 72, 153, 0.1);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 20px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.15);
        }

        .skill-icon {
          font-size: 1.4rem;
          color: #ec4899;
          padding: 8px;
          background: linear-gradient(135deg, #fdf2f8, #ffffff);
          border-radius: 8px;
          border: 1px solid rgba(236, 72, 153, 0.2);
        }

        .skill-name {
          font-weight: 600;
          color: #be185d;
          font-size: 0.95rem;
        }

        /* Resume Section */
        .resume-container {
          width: 100%;
          height: 100%;
        }

        .resume-card {
          background: linear-gradient(135deg, #ffffff 0%, #fdf2f8 100%);
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(190, 24, 93, 0.12);
          border: 1px solid rgba(236, 72, 153, 0.15);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .resume-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(190, 24, 93, 0.18);
        }

        .resume-visual {
          position: relative;
          margin-bottom: 30px;
        }

        .resume-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }

        .resume-main-icon {
          font-size: 4.5rem;
          color: #ec4899;
          z-index: 2;
          position: relative;
        }

        .icon-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
          border-radius: 50%;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }

        .resume-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #ec4899, #be185d);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
        }

        .badge-icon {
          font-size: 1rem;
        }

        .resume-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .resume-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #be185d;
          margin-bottom: 15px;
        }

        .resume-description {
          font-size: 1rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 25px;
          flex: 1;
        }

        .resume-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(236, 72, 153, 0.05);
          border-radius: 16px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #ec4899;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #6b7280;
          font-weight: 500;
        }

        .resume-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .resume-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          flex: 1;
          justify-content: center;
        }

        .view-btn {
          background: linear-gradient(135deg, #ec4899, #be185d);
          color: white;
          box-shadow: 0 6px 16px rgba(236, 72, 153, 0.3);
        }

        .view-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4);
        }

        .download-btn {
          background: rgba(236, 72, 153, 0.1);
          color: #be185d;
          border: 2px solid #ec4899;
        }

        .download-btn:hover {
          background: #ec4899;
          color: white;
          transform: translateY(-3px);
        }

        /* Education Section */
        .education-section {
          margin-top: 60px;
        }

        .education-timeline {
          max-width: 1200px;
          margin: 0 auto;
        }

        .education-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 35px;
        }

        .edu-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          padding: 35px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(190, 24, 93, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.12);
          display: flex;
          gap: 25px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .edu-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(to bottom, #ec4899, #be185d);
        }

        .edu-card.current::before {
          background: linear-gradient(to bottom, #10b981, #059669);
        }

        .edu-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(190, 24, 93, 0.15);
        }

        .edu-status {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .edu-icon-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 5px;
        }

        .edu-icon {
          font-size: 2.8rem;
          color: #ec4899;
          padding: 18px;
          background: linear-gradient(135deg, #fdf2f8, #fce7f3);
          border-radius: 20px;
          border: 2px solid rgba(236, 72, 153, 0.2);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.15);
        }

        .edu-details {
          flex: 1;
        }

        .edu-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #be185d;
          margin-bottom: 8px;
        }

        .edu-field {
          font-size: 1rem;
          color: #ec4899;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .edu-institute {
          font-size: 1rem;
          color: #6b7280;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .edu-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .edu-duration {
          font-size: 0.9rem;
          color: #9ca3af;
          font-weight: 500;
        }

        .edu-score {
          font-size: 0.95rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 10px;
        }

        .edu-score.excellent {
          color: #059669;
          background: rgba(16, 185, 129, 0.1);
        }

        .edu-score.good {
          color: #0891b2;
          background: rgba(8, 145, 178, 0.1);
        }

        .edu-score.outstanding {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.1);
        }

        .progress-section {
          margin-top: 15px;
        }

        .progress-indicator {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: rgba(236, 72, 153, 0.15);
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, #10b981, #059669);
          border-radius: 3px;
          transition: width 0.8s ease;
        }

        .progress-text {
          font-size: 0.85rem;
          color: #059669;
          font-weight: 600;
        }

        .achievement-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(236, 72, 153, 0.1);
          color: #be185d;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 10px;
        }

        .achievement-badge.outstanding {
          background: rgba(220, 38, 38, 0.1);
          color: #dc2626;
        }

        .achievement-icon {
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .main-content-section {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2rem;
          }

          .content-box {
            padding: 30px 25px;
          }

          .resume-card {
            padding: 30px 25px;
          }

          .resume-actions {
            flex-direction: column;
          }

          .resume-btn {
            flex: none;
          }

          .education-cards {
            grid-template-columns: 1fr;
          }

          .edu-card {
            flex-direction: column;
            text-align: center;
            padding: 30px 25px;
          }

          .edu-meta {
            justify-content: center;
          }

          .main-content-section {
            gap: 50px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .resume-stats {
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .intro-text {
            font-size: 1.1rem;
          }

          .resume-main-icon {
            font-size: 3.5rem;
          }

          .edu-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;