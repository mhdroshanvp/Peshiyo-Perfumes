import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
  );
};

export default Navbar;
