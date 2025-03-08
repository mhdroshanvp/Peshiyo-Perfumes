import React from 'react'
import Navbar from '../Components/HomeComponents/Navbar/Navbar'
import TopSection from '../Components/ShoppingComponents/TopSection'
import Footer from '../Components/HomeComponents/Footer/Footer'
import StickyHome from '../Components/ShoppingComponents/StickyHome/StickyHome'

function ShoppingPage() {
  return (
    <>
        <Navbar />
        <TopSection />
        <StickyHome />
        <Footer />
    </>
  )
}

export default ShoppingPage