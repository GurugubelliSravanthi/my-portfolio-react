import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Projects.css';

const projects = [
  {
    title: "Smartpond Monitoring System",
    description:
      "An IoT-based water monitoring system for aquaculture using sensors and live dashboards.",
    tags: ["IoT", "React", "Node.js", "Firebase"],
  },
  {
    title: "Resume Builder",
    description:
      "An intuitive web app to build and download professional resumes in PDF format.",
    tags: ["React", "HTML", "CSS", "jsPDF"],
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal developer portfolio showcasing my skills, projects, and contact information.",
    tags: ["React", "Bootstrap", "Routing"],
  },
  {
    title: "Caro Cart",
    description:
      "An online shopping platform with cart management, product browsing, and checkout features.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A few things I've built recently.</p>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} bg="pink-badge" className="me-1">
                        {tag}
                      </Badge>
                    ))}
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
