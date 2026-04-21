<<<<<<< HEAD
import React from 'react';
import './Navbar.css';
import 'animate.css';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 94c4f0e (huge change in the UI)
import { Link } from 'react-router-dom';
import './Navbar.css';

<<<<<<< HEAD
function Navbar() {

  return (
    <>
      <Link to='/'>
        <div className="navbar">
          <div className="site-name">PESHIYO</div>
        </div>
      </Link>
    </>
=======
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-left">
        <Link to="/shop" className="nav-link hover-target">Shop</Link>
      </div>

      <div className="nav-center">
        <Link to="/" className="nav-logo hover-target">Peshiyo</Link>
      </div>

      <div className="nav-right">
        {/* Intentionally empty for balance, as it's not an e-commerce store */}
      </div>
    </nav>
>>>>>>> 94c4f0e (huge change in the UI)
  );
};

export default Navbar;
