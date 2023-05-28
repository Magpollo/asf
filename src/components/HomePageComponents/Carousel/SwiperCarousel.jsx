import React from 'react';
// Import Swiper React components
import { Slide } from "react-reveal"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import ButtonOne from '../../ShareComponents/ButtonOne';
import bgPattern from "../../../assets/Pattern.png";
// Import Swiper styles
import "./SwiperCarousel.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const SwiperCarousel = () => {
  return (
    <section className="py-20 container mx-auto pt-40 grid">
      <Slide bottom>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-6xl text-6xl font-bold text-center text-white max-w-3xl mx-auto"
        >
          Celebrate the flavors of Africa with every bite
        </h1>
      </Slide>
      <div className="flex md:flex-row flex-col justify-self-center py-12 w-fit">
        <Slide bottom
          className="w-fit"
        >
          <ButtonOne>Order Online</ButtonOne>
        </Slide>
        <Slide bottom
          className="w-fit"
        >
          <ButtonOne>Make Reservation</ButtonOne>
        </Slide>
      </div>
      <Slide bottom>
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
        className=""
      >
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/1681442270321-YKY4K5MBMDHZAU50G45L/middle-eastern-cuisine-atlanta-georgia.jpg?format=2500w"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/1681442263532-PV8VNLLNRY6HMLQCELED/Adas+Polo+-+Cocktail.jpg?format=2500w"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/7916bafe-4f9f-49d9-947c-51e515bcb998/Delbar+Breakfast+Platter.jpg?format=2500w"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/1681442263532-PV8VNLLNRY6HMLQCELED/Adas+Polo+-+Cocktail.jpg?format=2500w"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
      </Slide>
    </section>
  );
};

export default SwiperCarousel;
