import { useState } from 'react';
import './Welcoming.css';

function Welcoming() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>


      <div className='welcome-collapse'>
        {/* Section 1 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(1)}>
            The Power of Fragrance: More Than Just a Scent {openSection === 1 ? '▲' : '▼'}
          </button>
          {openSection === 1 && (
            <div className='collapse-content'>
              <p>Fragrance is more than just a pleasant aroma—it’s an expression of personality, a trigger for memories, and a confidence booster. The right scent can leave a lasting impression, evoke emotions, and even uplift your mood. At Peshiyo, we craft perfumes that blend luxury and affordability, ensuring you get a premium fragrance that defines your unique essence. Whether you prefer floral, woody, or oriental notes, every bottle is designed to make you feel confident, elegant, and unforgettable.
              Discover the power of scent and let Peshiyo be your signature.</p>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(2)}>
            Why Choosing the Right Fragrance Matters {openSection === 2 ? '▲' : '▼'}
          </button>
          {openSection === 2 && (
            <div className='collapse-content'>
              <p>A fragrance is a personal statement—it speaks before you do. The right perfume complements your style, enhances your presence, and creates a unique aura around you. Whether you love fresh, citrusy notes for daytime wear or rich, sensual aromas for special occasions, Peshiyo offers a collection of expertly crafted perfumes to suit every mood and moment. With high-quality ingredients and long-lasting formulas, we ensure that every drop of fragrance delivers an experience of elegance and charm—at a price that fits your lifestyle.</p>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(3)}>
            The Art of Scent: A Statement of Elegance {openSection === 3 ? '▲' : '▼'}
          </button>
          {openSection === 3 && (
            <div className='collapse-content'>
              <p>Fragrance is more than a scent—it’s an identity. It evokes emotions, sparks memories, and leaves a lasting impression. At Peshiyo, we blend luxury with affordability to craft signature perfumes that define you. From floral to woody to oriental, each bottle is designed to make you feel confident, refined, and unforgettable.
              Experience the art of scent with Peshiyo—crafted for those who appreciate elegance.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default Welcoming;