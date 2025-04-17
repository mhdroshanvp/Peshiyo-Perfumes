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
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once
      });
  }, []);

  return (
      <>
          <Navbar />
          <div data-aos="fade-down">
              <NewsBulletin />
          </div>
          <div data-aos="fade-left">
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
          <div data-aos="fade-out">
              <Footer />
          </div>
      </>
  );
}

export default HomePage