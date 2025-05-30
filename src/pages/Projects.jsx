import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";
// Import your project images (you'll need to add these)
import PortfolioImg from "../assets/portfolio.png";
// import ResumeBuilderImg from "../assets/resume-builder.jpg";
import CarocartImg from "../assets/carocart.png";
// import SmartPondImg from "../assets/smart-pond.jpg";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built with React and Bootstrap. Features include project showcases, skills section, contact form, and dark/light mode toggle. Designed to showcase my work and skills effectively.",
    imageUrl: PortfolioImg,
    link: "#",
  },
  {
    id: 2,
    title: "Resume Builder",
    description:
      "An interactive web application that helps users create professional resumes quickly. Features include multiple templates, real-time preview, PDF export functionality, and form validation.",
    // imageUrl: ResumeBuilderImg,
    link: "#",
  },
  {
    id: 3,
    title: "Carocart E-commerce",
    description:
      "A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with React, Node.js, and MongoDB.",
    imageUrl: CarocartImg,
    link: "#",
  },
  {
    id: 4,
    title: "Smart Pond Monitoring System",
    description:
      "IoT-based solution for monitoring pond conditions including water quality, temperature, and pH levels. Features real-time data visualization, alerts, and remote monitoring capabilities.",
    // imageUrl: SmartPondImg,
    link: "#",
  },
];

const Projects = () => {
  return (
    <Container className="projects-container">
      <Row>
        <Col className="text-center">
          <h2 className="projects-title">My Projects</h2>
        </Col>
      </Row>
      <Row className="project-row">
        {projects.slice(0, 2).map((project) => (
          <Col
            md={6}
            key={project.id}
            className="d-flex align-items-stretch mb-4"
          >
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.imageUrl}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="project-row">
        {projects.slice(2, 4).map((project) => (
          <Col
            md={6}
            key={project.id}
            className="d-flex align-items-stretch mb-4"
          >
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.imageUrl}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
