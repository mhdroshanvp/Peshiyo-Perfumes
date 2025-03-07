import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Sticky.css';

function Sticky() {
  const [info, setInfo] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show modal on page load
  useEffect(() => {
    setInfo(true);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
      </div>

      {/* Info Modal (Opens on page load) */}
      {info && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2 className='info'>Information</h2>
            <p className='info-txt'>
              We’re currently working hard to bring you an amazing experience! Thank you for your patience as we make improvements. Please check back soon—we can’t wait to share something special with you!
            </p>
            <button className='close-btn' onClick={() => setInfo(false)}>
              <img src="https://media.lordicon.com/icons/wired/outline/1735-emergency-exit.gif" alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sticky;
