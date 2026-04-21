<<<<<<< HEAD
import React,{useState} from 'react';
import { FaWhatsapp , FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import './Footer.css';
import logo from '../../../assets/BigLogo.png'
import FormModal from '../FormModal/FormModal';

function Footer() {

  const phoneNumber = '7559966190';
  const message = "Hello, I'm interested in your products!";

  const [showModal, setShowModal] = useState(false);

  const handleShopClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <div className='footer-logo'>
            <img src={logo} alt="Peshiyo Logo" />
          </div>
          <button onClick={handleContactClick} className='contact-button'>Reviews<MdReviews /></button>
          <p className='footer-description'>
            "Fragrance is the invisible accessory that completes your personality."
          </p>
        </div>



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
          <p className='copyright'>Meet the developer <a style={{color:'white'}} href="https://roshanvp.vercel.app/" target="_blank" rel="noopener noreferrer">roshan</a></p>
        </div>
      </div>

      

      <div className='developer-credit'>
        <p>
          <p>&copy; 2025 Peshiyo. All rights reserved.</p>
        </p>
      </div>

    </footer>
    {showModal && (
      <FormModal isOpen={showModal} onClose={handleCloseModal} />
    )}


    </>
  );
}

export default Footer;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Peshiyo</h2>
          <p className="footer-tagline">Wear the invisible. Feel the unforgettable.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-list">
              <li><Link to="/shop" className="hover-target">All Fragrances</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.instagram.com/peshiyo_/" target="_blank" rel="noreferrer" className="social-link hover-target">
            <FaInstagram />
          </a>
          <a href="https://wa.me/917559966190" target="_blank" rel="noreferrer" className="social-link hover-target">
            <FaWhatsapp />
          </a>
          <a href="mailto:Peshiyoperfume@gmail.com" target="_blank" rel="noreferrer" className="social-link hover-target">
            <GoMail />
          </a>
        </div>
        <div className="footer-legal">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Peshiyo Perfumes. All rights reserved.
          </div>
          <p className="footer-developer">
            Meet the developer —{' '}
            <a href="https://roshanvp.vercel.app" target="_blank" rel="noreferrer" className="footer-developer-link hover-target">
              Roshan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 94c4f0e (huge change in the UI)
