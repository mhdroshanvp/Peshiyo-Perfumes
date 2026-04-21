import { useEffect } from 'react';
import Navbar from '../Components/HomeComponents/Navbar/Navbar.jsx';
import Hero from '../Components/HomeComponents/Hero/Hero.jsx';
import About from '../Components/HomeComponents/About/About.jsx';
import Products from '../Components/HomeComponents/Products/Products.jsx';
import Footer from '../Components/HomeComponents/Footer/Footer.jsx';
import InstagramBar from '../Components/HomeComponents/Social Media/InstagramBar.jsx';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="home-page animate__animated animate__fadeIn"
      style={{ animationDuration: '1.5s' }}
    >
      <Navbar />
      <Hero />
      <Products />
      <About />
      <InstagramBar />
      <Footer />
    </div>
  );
}

export default HomePage;
