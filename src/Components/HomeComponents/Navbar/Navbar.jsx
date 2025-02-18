import React, { useState } from 'react';
import './Navbar.css';
import 'animate.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav className="navbar">
        <div className="site-name animate__animated animate__fadeIn">PESHIYO</div>

        {/* Hamburger icon */}
        <div className={`hamburger ${isNavVisible ? 'active' : ''}`} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar links */}
        <ul className={`nav-link ${isNavVisible ? 'show' : ''}`}>
          <li><Link to="/underconstruction" onClick={toggleNav}>home</Link></li>
          <li><Link to="/underconstruction" onClick={toggleNav}>shop</Link></li>
          <li><Link to="/underconstruction" onClick={toggleNav}>about us</Link></li>
          <li><Link to="/underconstruction" onClick={toggleNav}>contact us</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;