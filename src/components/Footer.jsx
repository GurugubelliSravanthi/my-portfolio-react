import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are passionate about creating amazing web experiences. Connect with us
            to build something great together.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" aria-label="Home">Home</a></li>
            <li><a href="#services" aria-label="Services">Services</a></li>
            <li><a href="#portfolio" aria-label="Portfolio">Portfolio</a></li>
            <li><a href="#contact" aria-label="Contact">Contact</a></li>
          </ul>
        </div>
{/* 
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li>📍 123 Web Street, Design City</li>
            <li>✉️ contact@yourdomain.com</li>
            <li>📞 +1 (555) 123-4567</li>
          </ul>
        </div> */}

        <div className="footer-social">
          <h3>Follow Us</h3>
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
