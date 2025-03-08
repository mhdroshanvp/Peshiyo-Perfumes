import React from 'react'
import './StickyHome.css';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


function StickyHome() {    

  return (
    <>
          <div className='sticky-buttons'>
            <Link to='/'>
              <button className='back-to-top-btn'>
                <FaHome />
              </button>
            </Link>
          </div>
    </>
  )
}

export default StickyHome