import React from 'react';
import { FaWhatsapp , FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

import './Footer.css';
import logo from '../../../assets/BigLogo.png'

function Footer() {

  const phoneNumber = '7559966190';
  const message = "Hello, I'm interested in your products!";

  const handleShopClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };


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


        {/* Social Media Links */}
        <div className='footer-section'>
          <h3 className='footer-heading'>Follow Us</h3>
          <div className='social-media'>
            <a onClick={handleShopClick} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='social-icon' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='social-icon' />
            </a>
            <a href="mailto:Peshiyoperfume@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail className='social-icon' />
            </a>
          </div>
          <p className='copyright'>&copy; {new Date().getFullYear()} Peshiyo. All rights reserved.</p>
        </div>
      </div>

      <div className='developer-credit'>
        <p>
          Developed by <a href="https://roshanvp.vercel.app/" target="_blank" rel="noopener noreferrer">Roshan</a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;