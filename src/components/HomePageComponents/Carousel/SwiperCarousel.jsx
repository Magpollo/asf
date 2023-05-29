import React from 'react';
// Import Swiper React components
import { Slide } from 'react-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import ButtonOne from '../../ShareComponents/ButtonOne';
import bgPattern from '../../../assets/Pattern.png';
// Import Swiper styles
import './SwiperCarousel.css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperCarousel = () => {
  return (
    <section className="container mx-auto pt-40 grid">
      <Slide bottom>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-6xl text-6xl font-bold text-center text-white max-w-3xl mx-auto"
        >
          Celebrate the flavors of Africa with every bite
        </h1>
      </Slide>
      <div className="flex md:flex-row flex-col justify-self-center py-6 w-fit">
        <Slide
          bottom
          className="w-fit"
        >
          <ButtonOne>Order Online</ButtonOne>
        </Slide>
        <Slide
          bottom
          className="w-fit"
        >
          <ButtonOne>Make Reservation</ButtonOne>
        </Slide>
      </div>
      <Slide bottom></Slide>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        className="py-10"
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

export default SwiperCarousel;
