import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';
import Img1 from '../../../assets/banner1.jpg'
import Img2 from '../../../assets/banner2.jpg'
import Img3 from '../../../assets/banner3.jpg'

function SwiperFunction(){
    return (
        <>
    
          <div className='welcome-banner'>
            <Swiper
              spaceBetween={30} // Space between slides
              centeredSlides={true} // Center the active slide
              autoplay={{
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Continue autoplay after user interaction
              }}
              pagination={{
                clickable: true, // Allow clicking on pagination bullets
              }}
              navigation={true} // Enable navigation arrows
              modules={[Autoplay, Pagination, Navigation]} // Add required modules
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={Img1} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img2} alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Img3} alt="Slide 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      );
}

export default SwiperFunction