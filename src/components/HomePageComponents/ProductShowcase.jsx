import React from "react";
import { Reveal } from "react-reveal"
import { Link } from "react-router-dom";
import bgPattern from "../../assets/cream.png";
const ProductShowcase = () => {
  return (
    <section className="lg:py-2 px-0 " style={{
      backgroundImage: `url(${bgPattern})`,
      width: "100%",
      zIndex: "-1",
      marginTop: "0px",
    }}>
      <Reveal effect="fadeInUp">
      <h2
        style={{ fontFamily: "'Jelytta', sans-serif" }}
        className="lg:text-6xl text-4xl text-center my-10 text-black-100">
          
        African Flavour Beckons
      </h2>
        </Reveal>
        <Reveal effect="fadeInUp">
        <h1 
        style={{ fontFamily: "'Zilla Slab', sans-serif" }}
        className="lg:text-5xl text-2xl font-bold p-2 max-w-3xl mx-auto text-center text-black-100">
        Our dishes, rooted in tradition, bring the soulful warmth of African cuisine to your plate.
      </h1>
      </Reveal>
      <Reveal effect="fadeInUp">

      <p className="lg:text-2xl p-2 text-xl text-black-100 max-w-xl mx-auto text-center my-10">
      Translating to "heart, captured" in Farsi, African Soul Food is a love letter to the influential dishes that shaped 
      Fares Kargar's youth and the women in his life who instilled his deep appreciation for African cooking.  
      <Link className="text-red-500 border-b-2 border-red-500" to={"/"}>
          View Menu
        </Link>
      </p>
      </Reveal>
      <Reveal effect="fadeInUp">
      <button className="lg:my-22 hover:animate-slide font-bold my-16 border-none btn btn-outline mx-auto flex bg-primary text-black-100 btn-md lg:btn-md btn-wide w-1/4">
        ORDER ONLINE
        </button>
      </Reveal>

      <Reveal effect="fadeInUp">
      <button className="lg:my-22 hover:animate-slide font-bold my-16 border-none btn btn-outline mx-auto flex bg-primary text-black-100 btn-md lg:btn-md btn-wide w-1/4">
        Make Reservation
        </button>
      </Reveal>
    </section>
  );
};

export default ProductShowcase;
