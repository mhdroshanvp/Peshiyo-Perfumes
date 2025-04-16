import React from 'react'
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

function HomePage() {
  return (
    <>
    <Navbar />  
    <NewsBulletin />
    <SwiperFunction />
    <IntroSection />
    <Form />
    <Banner />
    <Sticky />
    <Blog />
    <Welcoming />
    <Footer />
    </>
  )
}

export default HomePage