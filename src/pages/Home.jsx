import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import "./Home.css";
import SG from "../assets/SRAVS.png";

function Home() {
  return (
    <section className="home-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="home-content">
            <div className="intro-text">
              <span className="greeting">Hi there, my name is</span>
              <h1 className="name-heading">
                <span className="name">Sravanthi Gurugubelli</span>
                <span
                  className="wave-emoji"
                  role="img"
                  aria-label="Waving hand"
                >
                  👋
                </span>
              </h1>
              <h2 className="profession">
                <FaLaptopCode className="react-icon" /> Full Stack Developer
              </h2>
              <p className="description">
                I specialize in building scalable, high-performance web
                applications from front-end to back-end. With a strong
                foundation in both client-side and server-side technologies, I
                am passionate about delivering seamless digital experiences.
              </p>
              <div className="cta-buttons">
                <Button as={Link} to="/projects" className="primary-btn">
                  Explore My Work
                </Button>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Gurugubellisravanthi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/sravanthigurgubelli1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a href="mailto:sravanthigurgubelli@email.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </Col>
          <Col lg={6} className="home-image-col">
            <div className="hero-image-container">
              <div className="hero-image">
                <img
                  src={SG}
                  alt="Sravanthi Gurugubelli"
                  className="profile-photo"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
