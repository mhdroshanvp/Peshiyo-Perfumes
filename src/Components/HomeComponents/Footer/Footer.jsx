import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import logo from '../../../assets/BigLogo.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo and Description */}
        <div className='footer-section'>
          <div className='footer-logo'>
            <img src={logo} alt="Peshiyo Logo" />
          </div>
          <p className='footer-description'>
            "Fragrance is the invisible accessory that completes your personality."
          </p>
        </div>

        {/* Quick Links */}
        <div className='footer-section'>
          <h3 className='footer-heading'>Quick Links</h3>
          <ul className='footer-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className='footer-section'>
          <h3 className='footer-heading'>Follow Us</h3>
          <div className='social-media'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='social-icon' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='social-icon' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='social-icon' />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='social-icon' />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Peshiyo. All rights reserved.</p>
        </div>
      </div>

      <div className='developer-credit'>
        <p>
          Developed by <a href="https://www.linkedin.com/in/mhdroshanvp/" target="_blank" rel="noopener noreferrer">Roshan</a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;