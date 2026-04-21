import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Peshiyo</h2>
          <p className="footer-tagline">Wear the invisible. Feel the unforgettable.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-list">
              <li><Link to="/shop" className="hover-target">All Fragrances</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.instagram.com/peshiyo_/" target="_blank" rel="noreferrer" className="social-link hover-target">
            <FaInstagram />
          </a>
          <a href="https://wa.me/917559966190" target="_blank" rel="noreferrer" className="social-link hover-target">
            <FaWhatsapp />
          </a>
          <a href="mailto:Peshiyoperfume@gmail.com" target="_blank" rel="noreferrer" className="social-link hover-target">
            <GoMail />
          </a>
        </div>
        <div className="footer-legal">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Peshiyo Perfumes. All rights reserved.
          </div>
          <p className="footer-developer">
            Meet the developer —{' '}
            <a href="https://roshanvp.vercel.app" target="_blank" rel="noreferrer" className="footer-developer-link hover-target">
              Roshan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
