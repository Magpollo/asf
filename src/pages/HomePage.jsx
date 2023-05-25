import React from "react";
import SwiperCarousel from "../components/HomePageComponents/Carousel/SwiperCarousel";
import ProductShowcase from "../components/HomePageComponents/ProductShowcase";
import MakeReservation from "../components/HomePageComponents/MakeReservation";
import CallToAction from "../components/HomePageComponents/CallToAction";
import bgPattern from "../assets/Pattern.png";
import usePageTitle from "../Hooks/usePageTitle";
import { Bounce } from "react-reveal";

const HomePage = () => {
  usePageTitle("Home Page");
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bgPattern})`,
          width: "100%",
          zIndex: "-1",
          marginTop: "-88px",
        }}>
        <section className=" ">
          <Bounce bottom cascade duration={3000}>
            <SwiperCarousel />
          </Bounce>
          <ProductShowcase />
          {/* <MakeReservation /> */}
          <CallToAction />
        </section>
      </main>
    </>
  );
};

export default HomePage;
