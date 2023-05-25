import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "./CateringSwiperCarousel.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const CateringSwiperCarousel = () => {
  return (
    <section className="pt-40 pb-12">
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
        className="">
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
    </section>
  );
};

export default CateringSwiperCarousel;
