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
        {/* Logo and Description */}
        <div className='footer-section'>
          <div className='footer-logo'>
            <img src={logo} alt="Peshiyo Logo" />
          </div>
          <button onClick={handleContactClick} className='contact-button'>Reviews<MdReviews /></button>
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