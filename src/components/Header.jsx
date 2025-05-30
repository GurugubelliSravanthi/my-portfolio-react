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
  const [expanded, setExpanded] = useState(false);

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

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-name">SG</span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={toggleNavbar}
          className="d-lg-none"
        >
          {expanded ? <HiX /> : <HiMenu />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className="nav-item"
                onClick={closeNavbar}
              >
                <item.icon className="nav-icon" />
                <span className="nav-text">{item.name}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
