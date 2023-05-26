import React from "react";
// Import Swiper React components
import { Reveal } from "react-reveal"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import bgPattern from "../../../assets/Pattern.png";
// Import Swiper styles
import "./SwiperCarousel.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const SwiperCarousel = () => {
  return (
    <section className="py-20 container mx-auto pt-40">
      <Reveal effect="fadeInUp">
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-6xl text-6xl font-bold text-center my-10 text-white max-w-3xl mx-auto">
          Celebrate the flavors of Africa with every bite
        </h1>
      </Reveal>
      <div className="flex justify-center space-x-5">
  <Reveal effect="fadeInUp">
    <button className="lg:my-22 hover:animate-slide font-bold my-8 border-none btn btn-outline bg-primary text-black-100 btn-md lg:btn-md btn-wide">
      ORDER ONLINE
    </button>
  </Reveal>
  <Reveal effect="fadeInUp">
    <button className="lg:my-22 hover:animate-slide font-bold my-8 border-none btn btn-outline bg-primary text-black-100 btn-md lg:btn-md btn-wide">
      Make Reservation
    </button>
  </Reveal>
</div>

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

export default SwiperCarousel;
