import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { LuConstruction } from "react-icons/lu";
import './Sticky.css';

function Sticky() {
  const [info, setInfo] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle info modal
  const handleInfo = () => {
    setInfo(true);
  };

  const closeModal = () => {
    setInfo(false);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <>
      <div className='sticky-buttons'>
        {showBackToTop && (
          <button className='back-to-top-btn' onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}

        <LuConstruction className='qst-btn' onClick={handleInfo} />
      </div>

      {/* Info Modal */}
      {info && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2 className='info'>Information</h2>
            <p className='info-txt'>
              We’re currently working hard to bring you an amazing experience! Thank you for your patience as we make improvements. Please check back soon—we can’t wait to share something special with you!
            </p>
            <button className='close-btn' onClick={closeModal}>
              <img src="https://media0.giphy.com/avatars/danielfigueirdo/mR5uHXLuePGT.gif" alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sticky;