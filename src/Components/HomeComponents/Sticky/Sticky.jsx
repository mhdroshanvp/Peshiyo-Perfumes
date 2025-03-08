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
        <div className='Infomodal-overlay'>
          <div className='Infomodal'>
            <h2 className='infomodalHeading'>Welcome to Peshiyo</h2>
                <table className='info-txt'>
                  <td>
                  <li>Click the <strong>shopping cart</strong> icon to explore our collection</li>
                  <li>Found your favorite? Hit <strong>Buy Now</strong> to message us on <strong>WhatsApp</strong></li>
                  <li>Just <strong>send</strong> the pre-written text, and our team will assist you</li>
                  </td>
                </table>
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
