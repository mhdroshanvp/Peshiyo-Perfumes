import React, { useState } from "react";
import "./TopSection.css";
import bottle1 from "../../assets/bottle-1.png";
import bottle2 from "../../assets/bottle-2.jpg";
import bottle3 from "../../assets/bottle-3.jpg";

import { GiDelicatePerfume } from "react-icons/gi";


function TopSection() {
  const [selectedSize, setSelectedSize] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);


  const products = [
    { 
      id: 1, 
      name: "PESHIYO PERFUME A", 
      size: "8ML", 
      price: [150, 250], 
      image: bottle3, 
      description: "A rich and sophisticated scent with woody undertones.",
      fragranceNotes: "Sandalwood, Musk, Amber",
      message:"Hello, I'm interested in ordering PESHIYO PERFUME A ,8ML Size. Could you provide more details?"
    },
    { 
      id: 2, 
      name: "PESHIYO PERFUME B", 
      size: "6ML", 
      price: [150, 250, 350, 450], 
      image: bottle2, 
      description: "An enchanting blend of floral and citrus notes.",
      fragranceNotes: "Rose, Jasmine, Bergamot",
      message:"Hello, I'm interested in ordering PESHIYO PERFUME B ,6ML Size. Could you provide more details?"
    },
    { 
      id: 3, 
      name: "PESHIYO PERFUME C", 
      size: "3ML", 
      price: [100, 200, 300], 
      image: bottle1, 
      description: "A bold and intense fragrance with deep spicy tones.",
      fragranceNotes: "Oud, Cardamom, Patchouli",
      message:"Hello, I'm interested in ordering PESHIYO PERFUME C ,3ML Size. Could you provide more details?"
    }
  ];

  const combos = [
    { id: 4, name: "COMBO PACK 6 PERFUMES", size: "8ML", price: 699 },
    { id: 5, name: "COMBO PACK 4 PERFUMES", size: "8ML", price: 499 },
    { id: 6, name: "ARABIC PACK 2 PERFUMES", size: "8ML", price: 399 },
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

      <div className="filter-container">
        <label>Filter by Size:</label>
        <select onChange={(e) => setSelectedSize(e.target.value)}>
          <option value="All">All</option>
          <option value="3ML">3ML</option>
          <option value="6ML">6ML</option>
          <option value="8ML">8ML</option>
        </select>

        <label>Filter by Price:</label>
        <select onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="All">All</option>
          <option value="0-199">₹0 - ₹199</option>
          <option value="200-399">₹200 - ₹399</option>
          <option value="400-699">₹400 - ₹699</option>
          <option value="700+">₹700+</option>
        </select>
      </div>


      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="size-label">Size: {product.size}</p>
              <p className="price-label">Price: {Array.isArray(product.price) ? product.price.join(' / ') : product.price} Rs</p>
              <div className="product-buttons">
                <button className="prd-details" onClick={() => openModal(product)}><GiDelicatePerfume className="prd-details-icon" /></button>
                <button className="prd-buy" onClick={() => handleBuyBtn(product)}>Buy Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>


      <div className="top-heading">
        <p className="heading-text">Combo Packs</p>
      </div>
      <hr className="top-line" />
      <div className="product-container">
        {filteredCombos.length > 0 ? (
          filteredCombos.map((combo) => (
            <div key={combo.id} className="product-card">
              <h3>{combo.name}</h3>
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
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image"/>
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
