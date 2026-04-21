import p1 from '../assets/perfume-bottle-1.png';
import p2 from '../assets/perfume-bottle-2.png';
import p3 from '../assets/perfume-bottle-3.png';
import p4 from '../assets/perfume-bottle-4.png';
import p5 from '../assets/perfume-bottle-5.png';
import p6 from '../assets/perfume-bottle-6.png';
import p7 from '../assets/perfume-bottle-7.png';

/**
 * Product catalog — names, descriptions, prices, and notes must stay exactly as provided.
 */
export const PRODUCTS = [
  {
    id: 'oud-lavender',
    name: 'OUD LAVENDER',
    description: 'A rich and sophisticated scent with woody undertones.',
    notes: 'Sandalwood, Musk, Amber',
    sizes: [
      { label: '8ML', price: '₹350' },
      { label: '6ML', price: '₹250' },
    ],
    image: p1,
  },
  {
    id: 'white-oud',
    name: 'WHITE OUD',
    description: 'An enchanting blend of floral and citrus notes.',
    notes: 'Rose, Jasmine, Bergamot',
    sizes: [
      { label: '8ML', price: '₹400' },
      { label: '6ML', price: '₹250' },
    ],
    image: p2,
  },
  {
    id: 'kuwaiti-oud',
    name: 'KUWAITI OUD',
    description: 'A bold and intense fragrance with deep spicy tones.',
    notes: 'Oud, Cardamom, Patchouli',
    sizes: [
      { label: '8ML', price: '₹400' },
      { label: '6ML', price: '₹250' },
    ],
    image: p3,
  },
  {
    id: 'the-gold-beast',
    name: 'THE GOLD BEAST',
    description: 'A bold and intense fragrance with deep spicy tones.',
    notes: 'Oud, Cardamom, Patchouli',
    sizes: [
      { label: '8ML', price: '₹200' },
      { label: '6ML', price: '₹150' },
      { label: '3ML', price: '₹100' },
    ],
    image: p4,
  },
  {
    id: 'hugo-boss',
    name: 'HUGO BOSS',
    description: 'A bold and intense fragrance with deep spicy tones.',
    notes: 'Oud, Cardamom, Patchouli',
    sizes: [
      { label: '8ML', price: '₹150' },
      { label: '6ML', price: '₹100' },
    ],
    image: p5,
  },
  {
    id: 'creed-silver',
    name: 'CREED SILVER',
    description: 'A bold and intense fragrance with deep spicy tones.',
    notes: 'Oud, Cardamom, Patchouli',
    sizes: [
      { label: '8ML', price: '₹200' },
      { label: '6ML', price: '₹150' },
    ],
    image: p6,
  },
  {
    id: 'royal-oud',
    name: 'ROYAL OUD',
    description: 'A bold and intense fragrance with deep spicy tones.',
    notes: 'Oud, Cardamom, Patchouli',
    sizes: [
      { label: '8ML', price: '₹500' },
      { label: '6ML', price: '₹350' },
      { label: '3ML', price: '₹250' },
    ],
    image: p7,
  },
];
