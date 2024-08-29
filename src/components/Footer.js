import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/subhajitash120"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/subhajit-ash-623888212/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
      </div>
      <p className="footer-text">Created by Subhajit Ash</p>
    </footer>
  );
};

export default Footer;
