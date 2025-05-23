import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-name"></span>
          <span className="brand-highlight">SG</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              <span className="nav-text">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              <span className="nav-text">About</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-item">
              <span className="nav-text">Projects</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              <span className="nav-text">Contact</span>
            </Nav.Link>
            <Nav.Link 
              href="#hire-me" 
              className="nav-item hire-me-btn"
            >
              Hire Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;