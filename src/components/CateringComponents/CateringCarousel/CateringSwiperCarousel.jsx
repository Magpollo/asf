import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './CateringSwiperCarousel.css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

const CateringSwiperCarousel = () => {
  return (
    <section className="pt-20 md:pt-40 pb-12">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        className=""
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685390064/asf/IMG_4650_blpade.jpg"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685390338/asf/IMG_4655_znlhx7.jpg"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685390480/asf/IMG_4659_kgnjft.jpg"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685390628/asf/IMG_4676_dujhaz.jpg"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CateringSwiperCarousel;
