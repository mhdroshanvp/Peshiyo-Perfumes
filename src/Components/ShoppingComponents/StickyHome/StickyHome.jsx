import React, { useEffect, useState } from 'react';
import './StickyHome.css';
import { FaHome } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function StickyHome() {    
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div className='sticky-buttons'>
          <button className='back-to-top-btn' onClick={scrollToTop}>
            <FaHome />
          </button>
          <button className='back-to-top-btn' onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
}

export default StickyHome;
