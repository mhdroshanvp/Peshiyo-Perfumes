import React from 'react';
import './Navbar.css';
import 'animate.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <Link to='/'>
        <div className="navbar">
          <div className="site-name animate__animated animate__fadeIn">PESHIYO</div>
        </div>
      </Link>
    </>
  );
}

export default Navbar;