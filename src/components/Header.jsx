import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  HiHome, 
  HiUser, 
  HiCollection, 
  HiMail, 
  HiMenu, 
  HiX,
  HiSparkles
} from 'react-icons/hi';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: HiHome, path: '/' },
    { name: 'About', icon: HiUser, path: '/about' },
    { name: 'Skills', icon: HiUser, path: '/skills' },
    { name: 'Projects', icon: HiCollection, path: '/projects' },
    { name: 'Contact', icon: HiMail, path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            
            <span className="brand-name">SG</span>
            {/* <span className="brand-highlight">Gurugubelli</span> */}
          </Navbar.Brand>

          <button 
            className="mobile-toggle d-lg-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-block">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link 
                  key={item.name}
                  as={Link} 
                  to={item.path} 
                  className="nav-item"
                >
                  <item.icon className="nav-icon" />
                  <span className="nav-text">{item.name}</span>
                </Nav.Link>
              ))}
              <Nav.Link 
                href="#hire-me" 
                className="hire-me-btn"
              >
                <HiSparkles className="hire-icon" />
                <span>Hire Me</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="brand-logo">
              <div className="brand-icon">
                <HiSparkles />
              </div>
              <span className="brand-name">Sravanthi</span>
              <span className="brand-highlight">Gurugubelli</span>
            </div>
            <button 
              className="mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="mobile-nav-item"
                onClick={closeMobileMenu}
              >
                <item.icon className="mobile-nav-icon" />
                <span>{item.name}</span>
              </Link>
            ))}
            <a 
              href="#hire-me" 
              className="mobile-hire-btn"
              onClick={closeMobileMenu}
            >
              <HiSparkles />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;