<<<<<<< HEAD
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

      <TopSection />

      <StickyHome />

      <Footer />
    </>
  )
=======
import React, { useEffect } from 'react';
import Navbar from '../Components/HomeComponents/Navbar/Navbar';
import Footer from '../Components/HomeComponents/Footer/Footer';
import InstagramBar from '../Components/HomeComponents/Social Media/InstagramBar';
import ProductCard from '../Components/ProductShowcase/ProductCard';
import { PRODUCTS } from '../data/products';
import './ShoppingPage.css';

function ShoppingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shopping-page">
      <Navbar />
      <header className="shop-hero" aria-labelledby="shop-hero-title">
        <div className="shop-hero__texture" aria-hidden />
        <div className="shop-hero__inner">
          <p className="shop-hero__eyebrow">Peshiyo</p>
          <h1 id="shop-hero-title" className="shop-hero__title">
            The Collection
          </h1>
          <p className="shop-hero__line">
            Where silence wears a scent, and memory leans in to listen.
          </p>
        </div>
      </header>

      <main className="shop-main">
        <div className="shop-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <InstagramBar />
      <Footer />
    </div>
  );
>>>>>>> 94c4f0e (huge change in the UI)
}

export default ShoppingPage;
