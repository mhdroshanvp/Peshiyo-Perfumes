/* eslint-disable react/prop-types -- showcase cards use a stable internal shape */
import { getWhatsAppProductUrl } from '../../config/contact';
import './ProductCard.css';

const ProductCard = ({ product, style }) => {
  const noteTags = product.notes
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <article className="product-card hover-target" style={style}>
      <div className="product-card__image-wrap">
        <img src={product.image} alt="" className="product-card__image" />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>

        <ul className="product-card__tags" aria-label="Fragrance notes">
          {noteTags.map((tag) => (
            <li key={tag} className="product-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__sizes" aria-label="Size and price">
          {product.sizes.map((row) => (
            <div className="product-card__size-row" key={row.label}>
              <span className="product-card__size-label">{row.label}</span>
              <span className="product-card__size-price">{row.price}</span>
            </div>
          ))}
        </div>

        <a
          href={getWhatsAppProductUrl(product.name)}
          target="_blank"
          rel="noreferrer"
          className="product-card__cta hover-target"
        >
          Shop Now
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
