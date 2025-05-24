import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; // Make sure this is at the top of your Footer file

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Me</h3>
          <p>
            I'm passionate about creating amazing web experiences. Connect with me
            to build something great together.
          </p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" aria-label="Home">Home</Link></li>
            <li><Link to="/about" aria-label="About">About</Link></li>
            <li><Link to="/projects" aria-label="Projects">Projects</Link></li>
            <li><Link to="/contact" aria-label="Contact">Contact</Link></li>
          </ul>
        </div>  
        <div className="footer-social">
          <h3>Connect with me on</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">🌐</a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://linkedin.com/in/sravanthigurugubelli1" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Sravanthi Gurugubelli. All rights reserved.</p>
      </div>
    </footer>
  );
}
