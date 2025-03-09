// import React from 'react';
// import './Banner.css';
// import bannerImg from '../../../assets/bg.png';
// import logo from '../../../assets/LogoBig.png'

// function Banner() {
//   return (
//     <>
//       <div className='banner'>
//         <img src={bannerImg} className='bannerImage animate__animated animate__fadeIn' alt='bannerImg' />
//         <div className='center-banner'>
//           <h1 className='banner-title'>Peshiyo Perfumes</h1>
//           <p className='banner-description'>
//             Peshiyo creates more than scents we craft experiences. With premium ingredients and rich, lasting notes, our perfumes leave an unforgettable impression. Luxury in every drop, lasting beauty in every breath.
//           </p>
//           <button className='banner-button'>Shop Now</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Banner;

import React from 'react';
import bannerImage from '../../../assets/bannerImg1.png';
import './Banner.css';
import { Link } from 'react-router-dom';

function Banner() {


  return (
    <>
      <div className='banner'>
        <p className='bannerText animate__animated animate__fadeInDown'>
          Hey Welcome to <span style={{ color: '#2b3e34', margin: '0 5px' }}>Peshiyo</span>
        </p>
        <div className='banner-buttons'>
          <Link to='/shop'>

            {/* <button class="shopNow-btn animate__animated animate__zoomIn">Shop Now</button> */}
            <button class="custom-btn btn-3 animate__animated animate__zoomIn"><span>Shop Now</span></button>
          </Link>
        </div>
        {/* <p className='banner-parag animate__animated animate__lightSpeedInLeft'>
          At Peshiyo, we believe fragrance is an experience. Using premium, long-lasting ingredients, we craft captivating scents with rich, deep notes that linger all day. Our meticulous blending ensures high concentration, while each bottle offers the perfect balance of quantity and quality. Whether you love a light mist or a bold aroma, our formulations promise a luxurious, lasting fragrance journey.
        </p> */}
            <div className='start-container'>
                <div className='start-box'>
                    <p className='start-text'>
                    At Peshiyo, we believe that a great fragrance is more than just a scent—it’s an expression of personality, confidence, and elegance. Our collection of premium perfumes is carefully curated to bring you high-quality, long-lasting fragrances at prices that won’t break the bank.
Shopping with us is simple and seamless. Browse our collection, find your signature scent, and with just a click of the "Buy Now" button, you’ll be redirected to WhatsApp, where our team will assist you in completing your purchase. We’re here to make luxury accessible, so you can enjoy the art of fine fragrance without compromise.
Discover Peshiyo today and let your scent tell your story.
                    </p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Banner;