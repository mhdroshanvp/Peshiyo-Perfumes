import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBottle from '../../../assets/perfume-bottle-8.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-gradient-bg" aria-hidden />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line animate__animated animate__fadeInUp">
              Wear the invisible.
            </span>
            <span
              className="hero-title-line animate__animated animate__fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Feel the unforgettable.
            </span>
          </h1>
          <p
            className="hero-subtitle animate__animated animate__fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Discover a curated collection of artisan fragrances crafted for the modern soul.
          </p>
          <div className="animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link to="/shop" className="hero-button hover-target">
              Explore Collection
            </Link>
          </div>
        </div>

        <div
          className="hero-visual animate__animated animate__fadeIn"
          style={{ animationDelay: '0.75s' }}
        >
          <div className="hero-bottle-glow" aria-hidden />
          <img src={heroBottle} alt="Peshiyo fragrance bottle" className="hero-product-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
