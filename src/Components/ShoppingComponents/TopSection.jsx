import React, { useState,useRef } from "react";
import "./TopSection.css";
import bottle1 from "../../assets/prd1.jpg";
import bottle2 from "../../assets/prd2.jpg";
import bottle3 from "../../assets/prd3.jpg";
import bottle4 from "../../assets/prd4.jpg";
import bottle5 from "../../assets/prd5.jpg";
import bottle6 from "../../assets/prd6.jpg";
import bottle7 from "../../assets/prd7.jpg";
import bottle8 from "../../assets/prd8.jpg";
import bottle9 from "../../assets/prd9.jpg";

import { GiDelicatePerfume } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";




function TopSection() {
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const comboSectionRef = useRef(null);


  const scrollToCombos = () => {
    if (comboSectionRef.current) {
      comboSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  const products = [
    {
      id: 1,
      name: "OUD LAVENDER",
      size: "8ML | 6ML",
      price: [350, 250],
      image: bottle1,
      description: "A rich and sophisticated scent with woody undertones.",
      fragranceNotes: "Sandalwood, Musk, Amber",
      message: "Hello, I'm interested in ordering OUD LAVENDER ,8ML or 6Ml (my preferred) Size. Could you provide more details?"
    },
    {
      id: 2,
      name: "WHITE OUD",
      size: "8ML | 6ML",
      price: [400, 250],
      image: bottle2,
      description: "An enchanting blend of floral and citrus notes.",
      fragranceNotes: "Rose, Jasmine, Bergamot",
      message: "Hello, I'm interested in ordering WHITE OUD ,6ML or 8ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 3,
      name: "KUWAITI OUD",
      size: "8ML | 6ML",
      price: [400, 250],
      image: bottle2,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering KUWAITI OUD,8 ML or 6ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 4,
      name: "THE GOLD BEAST",
      size: "8ML | 6ML | 3ML",
      price: [200, 150, 100],
      image: bottle3,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering THE GOLD BEAST PERFUME ,8ML,6ML or 3ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 5,
      name: "HUGO BOSS",
      size: "8ML | 6ML",
      price: [150, 100],
      image: bottle4,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering HUGO BOSS ,8ML or 6ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 6,
      name: "CREED SILVER",
      size: "8ML | 6ML",
      price: [200, 150],
      image: bottle5,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering CREED SILVER PERFUME ,8ML or 6ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 7,
      name: "ROYAL OUD",
      size: "8ML | 6ML | 3ML",
      price: [500, 350, 250],
      image: bottle2,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering ROYAL OUD PERFUME ,8ML,6ML or 3ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 8,
      name: "VELVET DESSERT",
      size: "8ML | 3ML",
      price: [150, 100],
      image: bottle9,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering VELVET DESSERT ,8ML or 3ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 9,
      name: "BERRY FRUITY",
      size: "8ML | 6ML",
      price: [150, 100],
      image: bottle1,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering BERRY FRUITY PERFUME ,8ML or 6ML (my preferred) Size. Could you provide more details?"
    },
    {
      id: 9,
      name: "ARABIC EDITION",
      size: "8ML | 6ML | 3ML",
      price: [200, 150, 100],
      image: bottle8,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering SINGLE PACK FRENCH PERFUME ,8ML Size. Could you provide more details?"
    },
    {
      id: 10,
      name: "PARIS PARADISE",
      size: "8ML | 6ML | 3ML",
      price: [200, 150, 100],
      image: bottle7,
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message: "Hello, I'm interested in ordering PARIS PARADISE PERFUME ,8ML,6ML or 3ML (my preferred) Size. Could you provide more details?"
    }
  ];

  const combos = [
    { id: 4, name: "COMBO PACK 4 PERFUMES", size: "8ML", price: 799, og: "Arabian fragrance" },
    { id: 5, name: "COMBO PACK 4 PERFUMES", size: "8ML", price: 599, og: "French fragrance" },
    { id: 6, name: "COMBO PACK 2 PERFUMES", size: "8ML", price: 399, og: "Arabic fragrance" },
    { id: 7, name: "COMBO PACK 2 PERFUMES", size: "8ML", price: 299, og: "French fragrance" },
  ];


  const filteredProducts = products.filter((product) => {
    const sizeMatch = selectedSize === "All" || product.size === selectedSize;
    const priceMatch =
      selectedPrice === "All" ||
      (selectedPrice === "0-199" && (Array.isArray(product.price) ? product.price.some(p => p >= 0 && p <= 199) : product.price >= 0 && product.price <= 199)) ||
      (selectedPrice === "200-399" && (Array.isArray(product.price) ? product.price.some(p => p >= 200 && p <= 399) : product.price >= 200 && product.price <= 399)) ||
      (selectedPrice === "400-699" && (Array.isArray(product.price) ? product.price.some(p => p >= 400 && p <= 699) : product.price >= 400 && product.price <= 699)) ||
      (selectedPrice === "700+" && (Array.isArray(product.price) ? product.price.some(p => p >= 700) : product.price >= 700));

    return sizeMatch && priceMatch;
  });


  const filteredCombos = combos.filter((combo) => {
    const sizeMatch = selectedSize === "All" || combo.size === selectedSize;
    const priceMatch =
      selectedPrice === "All" ||
      (selectedPrice === "0-199" && combo.price >= 0 && combo.price <= 199) ||
      (selectedPrice === "200-399" && combo.price >= 200 && combo.price <= 399) ||
      (selectedPrice === "400-699" && combo.price >= 400 && combo.price <= 699) ||
      (selectedPrice === "700+" && combo.price >= 700);

    return sizeMatch && priceMatch;
  });


  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };


  const handleBuyBtn = (item, isCombo = false) => {
    const whatsappNumber = "7559966190";

    const message = isCombo
      ? `Hello, I'm interested in ordering the ${item.name} combo pack of size ${item.size} for ${item.price} Rs. Could you provide more details?`
      : item.message;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };



  return (
    <>
      <div className="top-heading">
        <p className="heading-text">Best Selling Products</p>
      </div>
      <hr className="top-line" />

      <div className="combo-btn-container">
        <button className="combo-btn" onClick={scrollToCombos}>
          Checkout Combo's
        </button>
      </div>


      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
              
              <div key={product.id} className="product-card">
                <div className="product-content">
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="size-label">Size: {product.size}</p>
                    <p className="price-label">Price: {Array.isArray(product.price) ? product.price.join(' | ') : product.price} Rs</p>
                  </div>
                  <div className="product-hover-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-buttons">
                    <button className="prd-details" onClick={() => openModal(product)}>know more</button>
                    <button className="prd-buy" onClick={() => handleBuyBtn(product)}>Buy Now</button>
                  </div>
                </div>
              </div>

          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>


      <div className="top-heading" ref={comboSectionRef}>
        <p className="heading-text">Combo Packs</p>
      </div>
      <hr className="top-line" />
      <div className="product-container">
        {filteredCombos.length > 0 ? (
          filteredCombos.map((combo) => (
            <div key={combo.id} className="product-card">
              <h3>{combo.name}</h3>
              <h4>{combo.og}</h4>
              <p className="size-label">Size: {combo.size}</p>
              <p className="price-label">Price: {combo.price} Rs</p>
              <button className="prd-buy" onClick={() => handleBuyBtn(combo, true)}>Buy Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No combos found</p>
        )}
      </div>




      {selectedProduct && (
        <div className="modal-overlay selectedProduct">
          <div className="modal selectedModal">
            <button className="selectedClosed-button" onClick={closeModal}>&times;</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h2>{selectedProduct.name}</h2>
            <p className="modal-size">Size: {selectedProduct.size}</p>
            <p className="modal-price">Price: {selectedProduct.price.join(" / ")} Rs</p>
            <p className="modal-description">{selectedProduct.description}</p>
            <p className="modal-fragrance"><strong>Fragrance Notes:</strong> {selectedProduct.fragranceNotes}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TopSection;
