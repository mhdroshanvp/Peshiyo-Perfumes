import React from 'react'
import Navbar from '../Components/HomeComponents/Navbar/Navbar'
import TopSection from '../Components/ShoppingComponents/TopSection'
import Footer from '../Components/HomeComponents/Footer/Footer'
import StickyHome from '../Components/ShoppingComponents/StickyHome/StickyHome'
import NewsBulletin from '../Components/CommonComponents/NewsBulletin'

function ShoppingPage() {
  return (
    <>
        <Navbar />
        <NewsBulletin />
        <TopSection />
        <StickyHome />
        <Footer />
    </>
  )
}

export default ShoppingPage