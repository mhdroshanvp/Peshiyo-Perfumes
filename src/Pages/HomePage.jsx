import React from 'react'
import Navbar from '../Components/HomeComponents/Navbar/Navbar.jsx'
import Banner from '../Components/HomeComponents/Banner/Banner.jsx'
import Welcoming from '../Components/HomeComponents/Welcoming/Welcoming.jsx'
import SwiperFunction from '../Components/HomeComponents/Swiper/Swiper.jsx'
import Footer from '../Components/HomeComponents/Footer/Footer.jsx'
import Sticky from '../Components/HomeComponents/Sticky/Sticky.jsx'

function HomePage() {
  return (
    <>
    <Navbar />
    <Banner />
    <SwiperFunction />
    <Sticky />
    <Welcoming />
    <Footer />
    </>
  )
}

export default HomePage