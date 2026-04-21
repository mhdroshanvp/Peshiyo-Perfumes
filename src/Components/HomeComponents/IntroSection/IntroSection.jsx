import { useState, useEffect } from 'react';
import './IntroSection.css';
import { FaInstagram } from "react-icons/fa";

function IntroSection() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" >
          <div className="insta-banner">
            <p className="insta-headline">Let&apos;s Connect on Instagram</p>
            <p className="insta-subtext">Exclusive offers, updates &amp; behind-the-scenes from Peshiyo. Let your feed smell better</p>
            <div className='insta-btn-container'>
              <a href="https://www.instagram.com/peshiyo_/" target="_blank" rel="noopener noreferrer" className="insta-btn">Visit Our Instagram <FaInstagram /></a>
            </div>
            <div className='btn-container'>
              <button type="button" className='exit-btn' onClick={closeModal}>i&apos;ll do it later</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IntroSection;
