import React, { useState } from 'react';
import './Welcoming.css';

function Welcoming() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className='welcoming-div'>
        <p className='welcoming-text'>Premium Fragrance at the Perfect Price</p>
      </div>

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

        {/* Section 4 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(4)}>
            Fragrances & Mood: How Scents Affect Your Emotions {openSection === 4 ? '▲' : '▼'}
          </button>
          {openSection === 4 && (
            <div className='collapse-content'>
              <p>Scents have the power to calm your mind, energize your soul, and bring back cherished memories. Lavender relaxes, citrus invigorates, and vanilla soothes. At Peshiyo, we carefully craft perfumes that align with your emotions and lifestyle. Whether you need a fragrance to unwind after a long day or boost confidence before a big event, we have the perfect scent for every moment.</p>
            </div>
          )}
        </div>

        {/* Section 5 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(5)}>
            Signature Scents: Find the One That Defines You {openSection === 5 ? '▲' : '▼'}
          </button>
          {openSection === 5 && (
            <div className='collapse-content'>
              <p>Just like your style and personality, your fragrance should be unique to you. A signature scent leaves a memorable impression, making people associate that beautiful aroma with you. Whether you love the sensual depth of oud, the freshness of citrus, or the romantic allure of floral notes, Peshiyo has the perfect match for you.
              Find your signature scent and make every moment unforgettable.</p>
            </div>
          )}
        </div>

        {/* Section 6 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(6)}>
            The Science Behind Long-Lasting Perfumes {openSection === 6 ? '▲' : '▼'}
          </button>
          {openSection === 6 && (
            <div className='collapse-content'>
              <p>Ever wondered why some perfumes fade quickly, while others last all day? The secret lies in the composition of fragrance notes. Top notes provide the first impression, heart notes define the scent, and base notes ensure longevity. At Peshiyo, we use high-quality essential oils and expert blending techniques to ensure long-lasting fragrances that keep you fresh and confident throughout the day.</p>
            </div>
          )}
        </div>

        {/* Section 7 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(7)}>
            How to Apply Perfume for Maximum Impact {openSection === 7 ? '▲' : '▼'}
          </button>
          {openSection === 7 && (
            <div className='collapse-content'>
              <p>Applying perfume isn’t just about spraying and walking away—there’s an art to it. For maximum impact, apply perfume to pulse points like the wrists, neck, and behind the ears. Want extra longevity? Spray on clothes and hair. With Peshiyo’s high-quality fragrances, a little goes a long way—ensuring that your scent lingers beautifully wherever you go.</p>
            </div>
          )}
        </div>

        {/* Section 8 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(8)}>
            The History of Perfume: From Ancient to Modern Times {openSection === 8 ? '▲' : '▼'}
          </button>
          {openSection === 8 && (
            <div className='collapse-content'>
              <p>Perfume has been a symbol of luxury and refinement for centuries. From the ancient Egyptians using scented oils in religious rituals to the French revolutionizing modern perfumery, fragrance has always been a part of human culture. At Peshiyo, we bring together tradition and modern craftsmanship to create perfumes that honor the past while embracing innovation.</p>
            </div>
          )}
        </div>

        {/* Section 9 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(9)}>
            Fragrance Notes Explained: Top, Heart, and Base {openSection === 9 ? '▲' : '▼'}
          </button>
          {openSection === 9 && (
            <div className='collapse-content'>
              <p>Fragrance is more than just a pleasant aroma—it’s an expression of personality, a trigger for memories, and a confidence booster. The right scent can leave a lasting impression, evoke emotions, and even uplift your mood. At Peshiyo, we craft perfumes that blend luxury and affordability, ensuring you get a premium fragrance that defines your unique essence. Whether you prefer floral, woody, or oriental notes, every bottle is designed to make you feel confident, elegant, and unforgettable.
              Discover the power of scent and let Peshiyo be your signature.</p>
            </div>
          )}
        </div>

        {/* Section 10 */}
        <div className='collapse-section'>
          <button className='collapse-header' onClick={() => toggleSection(10)}>
            Fragrance Notes Explained: Top, Heart, and Base {openSection === 10 ? '▲' : '▼'}
          </button>
          {openSection === 10 && (
            <div className='collapse-content'>
              <p>Every perfume is made up of three layers of notes that unfold over time:

- Top Notes: The first impression, usually fresh and light (citrus, fruity, herbal).
- Heart Notes: The core of the fragrance, floral, spicy, or sweet.
- Base Notes: The lasting impression—woody, musky, or vanilla.
At Peshiyo, we blend these notes perfectly to create harmonious, long-lasting perfumes that evolve beautifully throughout the day.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Welcoming;