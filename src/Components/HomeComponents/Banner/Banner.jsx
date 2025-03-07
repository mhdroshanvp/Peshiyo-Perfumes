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
import bannerImage from '../../../assets/bannerImg.png';
import './Banner.css';
import { Link } from 'react-router-dom';

function Banner() {

  const phoneNumber = '7559966190';
  const message = "Hello, I'm interested in your products!";

  const handleShopClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };



  return (
    <>
      <div className='banner'>
        <img src={bannerImage} className='bannerImage animate__animated animate__fadeIn' alt='bannerImg' />
        <p className='bannerText animate__animated animate__fadeInDown'>
          Hey Welcome to <span style={{ color: '#808000', margin: '0 5px' }}>Peshiyo</span>
        </p>
        <div className='banner-buttons'>
          {/* <button className='shopNow-btn animate__animated animate__zoomIn' onClick={handleShopClick}>
            Shop Now
          </button> */}
          <Link to='/shop'>
            <button className='shopNow-btn animate__animated animate__zoomIn'>
              Shop Now
            </button>
          </Link>
        </div>
        <p className='banner-parag animate__animated animate__lightSpeedInLeft'>
          At Peshiyo, we believe fragrance is an experience. Using premium, long-lasting ingredients, we craft captivating scents with rich, deep notes that linger all day. Our meticulous blending ensures high concentration, while each bottle offers the perfect balance of quantity and quality. Whether you love a light mist or a bold aroma, our formulations promise a luxurious, lasting fragrance journey.
        </p>

      </div>
    </>
  );
}

export default Banner;