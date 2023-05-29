import React from "react";
import { Slide } from "react-reveal";
import bgPattern from "../../assets/cream.png";
import divider from "../../assets/divider.svg";
import ButtonOne from '../ShareComponents/ButtonOne';

const MakeReservation = () => {
  return (
    <section className="lg:py-2 py-2 mx-auto lg:px-80 px:10"
      style={{
        background: `url(${bgPattern})`,
        width: "100%",
        zIndex: "-1",
        marginTop: "0px",
      }}>

      <img
        src={divider}
        alt=""
        className="rounded-md mx-auto w-full mt-8"
      />

      <h2
        style={{ fontFamily: "'Zilla Slab', sans-serif" }}
        className="lg:text-6xl text-4xl text-center my-12 text-black-100">
        Come meet Delicious
      </h2>
      <h4
        style={{ fontFamily: "'Zilla Slab', sans-serif" }}
        className="lg:text-2xl text-2xl font-bold p-2 max-w-xl mx-auto text-center text-black-100">
        Our Menu Highlights
      </h4>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-4/4 mx-auto py-4 mt-12">
        <Slide bottom>
          <img
            src="https://static.wixstatic.com/media/ffffbd_b4bbface093e404895562f07fc90126a~mv2.jpg/v1/fill/w_488,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffffbd_b4bbface093e404895562f07fc90126a~mv2.jpg"
            alt=""
            className="rounded-md mx-auto"
          />
        </Slide>
        <Slide bottom>
          <div className="lg:px-10 mx-auto text-center">
            <h2
              style={{ fontFamily: "'Zilla Slab', sans-serif" }}
              className="lg:text-4xl text-4xl text-center my-5 text-black-100">
              Succulent Suya
            </h2>
            <h4
              style={{ fontFamily: "'Zilla Slab', sans-serif" }}
              className="lg:text-2xl text-2xl font-bold p-2 max-w-xl mx-auto text-center text-black-100">
              The African Kebob
            </h4>
            <p className="w-3/4 mx-auto">
              Suya or tsire is a spicy meat skewer which is a popular food item in  our home of West Africa. Our Suya is made with  spicy, skewered beef.
              It is marinated in spices (Yaji) which include peanut cake, salt, vegetable oil and other flavorings, and then barbecued.
              Suya is served with extra helpings of dried pepper mix and sliced onions.
            </p>
            <ButtonOne className="mx-auto">
              Order now
            </ButtonOne>
          </div>

        </Slide>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center w-4/4 mx-auto py-4 mt-8">
        <Slide bottom>
          <div className="lg:px-10 mx-auto text-center">
            <h2
              style={{ fontFamily: "'Zilla Slab', sans-serif" }}
              className="lg:text-4xl text-4xl text-center my-5 text-black-100">
              Amazing African Soups
            </h2>
            <h4
              style={{ fontFamily: "'Zilla Slab', sans-serif" }}
              className="lg:text-2xl text-2xl font-bold p-2 max-w-xl mx-auto text-center text-black-100">
              Ogbono soup highlighted
            </h4>
            <p className="w-3/4 mx-auto">
              Africa is the home of hearty, healthy soups. All made from scratch, African soups are filled with lots of green vegetables and fresh meats.
              This month's highlighted soup is rich and savory Ogbono indigenous to Southern Nigeria.
              This decadent delicacy made with ogbono seeds is both nutritious and satisfying.
            </p>
            <ButtonOne className="mx-auto">
              Order now
            </ButtonOne>
          </div>
        </Slide>
        <Slide bottom>
          <img
            src="https://static.wixstatic.com/media/ffffbd_92be01c0c372410c85d59f4f1f9c908a~mv2.jpg/v1/fill/w_489,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ffffbd_92be01c0c372410c85d59f4f1f9c908a~mv2.jpg"
            alt=""
            className="rounded-md mx-auto"
          />
        </Slide>

      </div>


    </section>
  );
};

export default MakeReservation;
