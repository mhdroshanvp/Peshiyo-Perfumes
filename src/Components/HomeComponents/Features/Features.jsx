import { useEffect, useRef } from 'react';
import './Features.css';
import { PiPlantLight, PiClockLight, PiDropLight } from "react-icons/pi";

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current.querySelectorAll('.feature-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" ref={sectionRef}>
      <div className="features-container">
        <div className="feature-item" style={{ transitionDelay: '0.1s' }}>
          <div className="feature-icon">
            <PiPlantLight />
          </div>
          <h3 className="feature-title">Handcrafted Ingredients</h3>
          <p className="feature-desc">Ethically sourced and meticulously chosen natural essences.</p>
        </div>
        
        <div className="feature-item" style={{ transitionDelay: '0.3s' }}>
          <div className="feature-icon">
            <PiClockLight />
          </div>
          <h3 className="feature-title">Long-lasting Sillage</h3>
          <p className="feature-desc">Formulated to leave an unforgettable, lingering trail.</p>
        </div>

        <div className="feature-item" style={{ transitionDelay: '0.5s' }}>
          <div className="feature-icon">
            <PiDropLight />
          </div>
          <h3 className="feature-title">Artisan Blended</h3>
          <p className="feature-desc">Masterfully crafted in small batches for unparalleled quality.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
