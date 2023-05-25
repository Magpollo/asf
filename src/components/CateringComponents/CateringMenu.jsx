import React from "react";
import { Fade, Zoom } from "react-reveal";

const CateringMenu = () => {
  return (
    <>
      <section>
        <Fade bottom big cascade duration={1500}>
          <h1 className="text-7xl text-center text-gray-100 pt-12">Catering</h1>
          <h2 className="text-5xl text-center text-gray-100 uppercase pt-12">
            African Soul Food AT YOUR LOCATION
          </h2>
          <p className="text-xl text-center text-gray-100 w-[75%] pt-12 mx-auto">
            Consider us for the next event you're hosting, fulfill a memorable
            dining experience from your location! We offer many options in
            regards to menus, which are completely customizable based on your
            needs and preferences. For those who prefer a quick pick
            up/delivery, please use the link to EZ Cater. For larger caterings
            or full-service events, please reach out via event inquiry and we
            will reach out to you as soon as possible.
          </p>
          <div className="flex gap-6 justify-center my-16">
            <button className="btn hover:animate-bounce btn-primary">
              CATERING MENUS
            </button>
            <button className="btn hover:animate-bounce btn-primary btn-outline">
              EZ CATER
            </button>
            <button className="btn hover:animate-bounce btn-primary">
              CATERING INQUIRY
            </button>
          </div>
        </Fade>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-2 items-center p-4">
          <Zoom bottom big cascade duration={1500}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/8473ba96-7552-4071-93c5-61cf1074310b/kookoo+sabzi.jpg?format=1000w"
              alt=""
              className="w-full"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/8473ba96-7552-4071-93c5-61cf1074310b/kookoo+sabzi.jpg?format=1000w"
              alt=""
              className="w-full"
            />
          </Zoom>
        </div>
      </section>
    </>
  );
};

export default CateringMenu;
