import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <section className="home-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="home-content">
            <div className="intro-text">
              <span className="greeting">Hello, I'm</span>
              <h1 className="name-heading">
                <span className="name">Sravanthi</span>
                <span className="wave-emoji" role="img" aria-label="waving hand">👋</span>
              </h1>
              <h2 className="profession">
                <FaReact className="react-icon" /> React Developer
              </h2>
              <p className="description">
                I build beautiful, responsive web applications with modern technologies. 
                Passionate about creating intuitive user experiences.
              </p>
              <div className="cta-buttons">
                <Button 
                  as={Link} 
                  to="/projects" 
                  className="primary-btn"
                >
                  View My Projects
                </Button>
                <Button 
                  href="#contact" 
                  variant="outline" 
                  className="secondary-btn"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FiTwitter />
              </a>
              <a href="mailto:your@email.com">
                <FiMail />
              </a>
            </div>
          </Col>
          <Col lg={6} className="home-image-col">
            <div className="hero-image-container">
              <div className="hero-image"></div>
              <div className="tech-stack">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>Bootstrap</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;