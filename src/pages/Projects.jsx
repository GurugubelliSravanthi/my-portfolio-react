import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: "Smartpond Monitoring System",
    description: "An IoT-based water monitoring system for aquaculture with real-time sensors, live dashboards, and intelligent analytics for optimal fish farming.",
    tags: ["IoT", "React", "Node.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&crop=center",
    category: "IoT & Hardware",
    status: "Live"
  },
  {
    title: "Resume Builder Pro",
    description: "Professional resume builder with multiple templates, real-time preview, PDF export, and ATS-friendly formatting for job seekers.",
    tags: ["React", "HTML", "CSS", "jsPDF"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop&crop=center",
    category: "Web Application",
    status: "Featured"
  },
  {
    title: "Personal Portfolio",
    description: "Modern developer portfolio with responsive design, smooth animations, and interactive elements showcasing skills and projects.",
    tags: ["React", "Bootstrap", "Routing"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
    category: "Portfolio",
    status: "Live"
  },
  {
    title: "Caro Cart E-commerce",
    description: "Full-stack e-commerce platform with secure authentication, payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center",
    category: "E-commerce",
    status: "In Progress"
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="background-overlay"></div>
      <Container>
        <div className="section-header">
          <div className="section-badge">
            ⭐ Featured Work
          </div>
          <h2 className="section-title">My Creative Projects</h2>
          <p className="section-subtitle">
            Explore my latest work and creative solutions that showcase my passion for development
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <Card className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <button className="preview-btn">
                        👁️ Preview
                      </button>
                    </div>
                  </div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <Card.Body className="project-body">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} className="tech-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <button className="action-btn primary-btn">
                      🔗 Live Demo
                    </button>
                    <button className="action-btn secondary-btn">
                      💻 Source Code
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;