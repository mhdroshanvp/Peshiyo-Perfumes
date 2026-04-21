import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './Sticky.css';

function Sticky() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

    </>
  );
}

export default Sticky;
