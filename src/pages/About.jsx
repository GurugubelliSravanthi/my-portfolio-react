import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaReact, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaCodeBranch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const skills = [
    { name: "React", icon: <FaReact />, description: "Hooks, Routing, Context API", level: 90, color: "#61DAFB" },
    { name: "Spring Boot", icon: <FaJava />, description: "REST APIs, Microservices", level: 85, color: "#5382A1" },
    { name: "JavaScript", icon: <FaJs />, description: "ES6+, Async/Await", level: 88, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, description: "Semantic Markup", level: 95, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, description: "Flexbox, Grid, Animations", level: 92, color: "#2965F1" },
    { name: "MySQL", icon: <FaDatabase />, description: "Schema Design, Optimization", level: 80, color: "#4479A1" },
    { name: "Git", icon: <FaCodeBranch />, description: "Version Control, CI/CD", level: 85, color: "#F05032" },
    { name: "UI/UX", icon: <FaPaintBrush />, description: "Wireframing, Prototyping", level: 75, color: "#6E45E2" }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-background-pattern"></div>
      <div className="about-gradient-overlay"></div>
      
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-decoration">About</span> Me
          </h2>
          <p className="section-subtitle">Crafting digital experiences with precision and passion</p>
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
        </motion.div>

        <Row className="about-content">
          <Col lg={5} className="bio-col">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bio-card"
            >
              <div className="bio-card-inner">
                <div className="bio-card-bg"></div>
                <div className="bio-content">
                  <h3 className="bio-title">
                    <span className="title-highlight">Full-Stack</span> Developer
                  </h3>
                  <div className="bio-text">
                    <p>
                      I'm <strong>Sravanthi</strong>, a dedicated software engineer specializing in building exceptional digital experiences. With expertise across the entire stack, I bridge the gap between beautiful interfaces and robust backend systems.
                    </p>
                    <p>
                      My approach combines <strong>technical precision</strong> with <strong>creative problem-solving</strong>, delivering solutions that are as efficient as they are elegant.
                    </p>
                    <div className="signature-block">
                      <div className="signature-line"></div>
                      <div className="signature-name">Sravanthi</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7} className="skills-col">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="skills-container"
            >
              <div className="skills-header">
                <h3 className="skills-title">Technical Expertise</h3>
                <div className="skills-subtitle">Proficiency across key technologies</div>
              </div>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="skill-item"
                  >
                    <Card className="skill-card">
                      <Card.Body>
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                          <div className="icon-backdrop" style={{ backgroundColor: `${skill.color}20` }}></div>
                        </div>
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                        <div className="skill-meta">
                          <div className="skill-progress">
                            <div 
                              className="progress-bar" 
                              style={{ 
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, ${skill.color}, ${lightenColor(skill.color, 20)})`
                              }}
                            ></div>
                          </div>
                          <div className="skill-percent">{skill.level}%</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Helper function to lighten colors
function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)}`;
}

export default About;