import { useEffect, useRef, useState } from 'react';
import './About.css';
import aboutImg from '../../../assets/Group 412.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <section className="about" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <div className="about-content">
          <h2 className="about-title">The Art of Perfumery</h2>
          <p className="about-quote">
            &ldquo;Every scent tells a story before a single word is spoken.&rdquo;
          </p>
          <div className="about-text-wrap">
            <p className="about-text">
              Born from a passion for botanical alchemy, Peshiyo creates fragrances that are more than just scents—they are an extension of your identity. Each bottle holds a universe of handpicked notes, ethically sourced and masterfully blended.
            </p>
            <p className="about-text">
              We believe in the power of invisible elegance. Our collections are designed for those who appreciate the subtle, lingering poetry of a truly exceptional fragrance.
            </p>
          </div>
          <button className="about-link hover-target">Discover Our Heritage</button>
        </div>
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Brand Story" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
