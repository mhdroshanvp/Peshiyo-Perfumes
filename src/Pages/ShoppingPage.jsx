import React,{useEffect} from 'react'
import Navbar from '../Components/HomeComponents/Navbar/Navbar'
import TopSection from '../Components/ShoppingComponents/TopSection'
import Footer from '../Components/HomeComponents/Footer/Footer'
import StickyHome from '../Components/ShoppingComponents/StickyHome/StickyHome'
import NewsBulletin from '../Components/CommonComponents/NewsBulletin'

import AOS from 'aos';
import 'aos/dist/aos.css';

function ShoppingPage() {

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
      <div data-aos="fade-down">
          <TopSection />
      </div>
      <StickyHome />
      <div data-aos="fade-out">
          <Footer />
      </div>
    </>
  )
}

export default ShoppingPage