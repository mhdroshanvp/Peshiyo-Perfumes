import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import Img1 from '../../../assets/banner1.jpg'
import Img2 from '../../../assets/banner2.jpg'
import Img3 from '../../../assets/banner3.jpg'
import Img4 from '../../../assets/banner4.jpg'
import Img5 from '../../../assets/banner5.jpg'
import Img6 from '../../../assets/banner6.jpg'
import Img7 from '../../../assets/banner7.jpg'
import Img8 from '../../../assets/banner8.jpg'
import Img9 from '../../../assets/banner9.jpg'
import Img10 from '../../../assets/banner10.jpg'
import Img11 from '../../../assets/banner11.jpg'

function SwiperFunction(){
    return (
        <div className='welcome-banner'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]} // Removed Navigation
              className="mySwiper"
            >
              <SwiperSlide><img src={Img1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={Img2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={Img3} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={Img4} alt="Slide 4" /></SwiperSlide>
              <SwiperSlide><img src={Img5} alt="Slide 5" /></SwiperSlide>
              <SwiperSlide><img src={Img6} alt="Slide 6" /></SwiperSlide>
              <SwiperSlide><img src={Img7} alt="Slide 7" /></SwiperSlide>
              <SwiperSlide><img src={Img8} alt="Slide 8" /></SwiperSlide>
              <SwiperSlide><img src={Img9} alt="Slide 9" /></SwiperSlide>
              <SwiperSlide><img src={Img10} alt="Slide 10" /></SwiperSlide>
              <SwiperSlide><img src={Img11} alt="Slide 11" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperFunction;
