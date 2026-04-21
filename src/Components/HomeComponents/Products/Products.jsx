import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../ProductShowcase/ProductCard';
import { PRODUCTS } from '../../../data/products';
import './Products.css';

const FEATURED_COUNT = 4;

const Products = () => {
  const gridRef = useRef(null);
  const featured = PRODUCTS.slice(0, FEATURED_COUNT);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const cards = el.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="products" id="collection">
      <div className="products-inner">
        <header className="products-header">
          <p className="products-eyebrow">Peshiyo</p>
          <h2 className="products-title">Our Signature Collection</h2>
          <p className="products-subtitle">
            A curated preview of our fragrances — each available to enquire via WhatsApp.
          </p>
        </header>

        <div className="products-grid products-grid--featured" ref={gridRef}>
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              style={{ transitionDelay: `${index * 0.06}s` }}
            />
          ))}
        </div>

        <div className="products-cta-wrap">
          <Link to="/shop" className="products-view-all hover-target">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
