import React from "react";
import CateringSwiperCarousel from "../components/CateringComponents/CateringCarousel/CateringSwiperCarousel";
import Pattern from "../assets/Pattern.png";
import CateringMenu from "../components/CateringComponents/CateringMenu";
import usePageTitle from "../Hooks/usePageTitle";
import { Bounce } from "react-reveal";

const CateringPage = () => {
  usePageTitle("Catering Page");

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
          marginTop: "-88px",
        }}>
        <div className="container mx-auto py-16">
          <Bounce bottom cascade duration={3000}>
            <CateringSwiperCarousel />
          </Bounce>
          <CateringMenu />
        </div>
      </section>
    </>
  );
};

export default CateringPage;