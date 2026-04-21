<<<<<<< HEAD
import React,{useEffect} from 'react'
import Navbar from '../Components/HomeComponents/Navbar/Navbar.jsx'
import Banner from '../Components/HomeComponents/Banner/Banner.jsx'
import Welcoming from '../Components/HomeComponents/Welcoming/Welcoming.jsx'
import SwiperFunction from '../Components/HomeComponents/Swiper/Swiper.jsx'
import Footer from '../Components/HomeComponents/Footer/Footer.jsx'
import Sticky from '../Components/HomeComponents/Sticky/Sticky.jsx'
import Blog from '../Components/HomeComponents/Blog/Blog.jsx'
import NewsBulletin from '../Components/CommonComponents/NewsBulletin.jsx'
import Form from '../Components/HomeComponents/FormModal/FormModal.jsx'
import IntroSection from '../Components/HomeComponents/IntroSection/IntroSection.jsx'
import '../App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  useEffect(() => {
      AOS.init({
          duration: 1000,
          once: true,
      });
  }, []);

  return (
      <>
          <Navbar />
          <div data-aos="fade-down">
              <NewsBulletin />
          </div>
          <div data-aos="fade-down">
              <SwiperFunction />
          </div>
          <IntroSection />
          <Form />
          <div data-aos="fade-up">
              <Banner />
          </div>
          <Sticky />
          <div data-aos="fade-up">
              <Blog />
          </div>
          <div data-aos="fade-in">
              <Welcoming />
          </div>
          <Footer />
      </>
=======
import React, { useEffect } from 'react';
import Navbar from '../Components/HomeComponents/Navbar/Navbar.jsx';
import Hero from '../Components/HomeComponents/Hero/Hero.jsx';
import About from '../Components/HomeComponents/About/About.jsx';
import Products from '../Components/HomeComponents/Products/Products.jsx';
import Testimonials from '../Components/HomeComponents/Testimonials/Testimonials.jsx';
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
      <Testimonials />
      <InstagramBar />
      <Footer />
    </div>
>>>>>>> 94c4f0e (huge change in the UI)
  );
}

export default HomePage;
