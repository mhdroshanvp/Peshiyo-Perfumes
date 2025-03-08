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


  return (
    <>
      <div className='banner'>
        <Link to='/shop'>
          <img src={bannerImage} className='bannerImage animate__animated animate__fadeIn' alt='bannerImg' />
        </Link>
        <p className='bannerText animate__animated animate__fadeInDown'>
          Hey Welcome to <span style={{ color: '#808000', margin: '0 5px' }}>Peshiyo</span>
        </p>
        <div className='banner-buttons'>
          <Link to='/shop'>
            <button className='shopNow-btn animate__animated animate__zoomIn'>
              <img src="https://media1.giphy.com/media/MCM9C4jJu0vi3iVf0R/giphy.gif?cid=6c09b952pejfs6nbofrfu8ncsuht02vm9thukp4r3avnvz56&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
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