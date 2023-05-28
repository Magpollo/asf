import React from 'react';
import { Reveal } from 'react-reveal';
import { Link } from 'react-router-dom';
import bgPattern from '../../assets/cream.png';
import ButtonOne from '../ShareComponents/ButtonOne';

const ProductShowcase = () => {
  return (
    <section
      className="lg:py-2 px-0 grid"
      style={{
        backgroundImage: `url(${bgPattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '0px',
      }}
    >
      <Reveal effect="fadeInUp">
        <h2
          style={{ fontFamily: "'Jelytta', sans-serif" }}
          className="lg:text-6xl text-4xl text-center py-10 text-black-100"
        >
          African Flavour Beckons
        </h2>
      </Reveal>
      <Reveal effect="fadeInUp">
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-5xl text-2xl font-bold p-2 max-w-3xl mx-auto text-center text-black-100"
        >
          Our dishes, rooted in tradition, bring the soulful warmth of African
          cuisine to your plate.
        </h1>
      </Reveal>
      <Reveal effect="fadeInUp">
        <p
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-2xl p-2 text-xl text-black-100 max-w-xl mx-auto text-center mt-10"
        >
          Experience the vibrant flavors and rich cultural heritage at African
          Soulfood Restaurant! Embark on a mouthwatering culinary journey by
          exploring our online menu. Get ready to indulge in a fusion of bold
          spices, hearty stews, and exotic ingredients that will transport you
          to the heart of Africa.{' '}
          <Link
            className="text-red-500 border-b-2 border-red-500"
            to={'/'}
          >
            View Menu
          </Link>
        </p>
      </Reveal>
      <div className="flex flex-col justify-self-center py-12 w-fit">
        <Reveal effect="fadeInUp">
          <ButtonOne width="w-80 md:w-96">Order Online</ButtonOne>
        </Reveal>
        <Reveal effect="fadeInUp">
          <ButtonOne
            width="w-80 md:w-96"
            bgColor={'bg-white'}
          >
            Make Reservation
          </ButtonOne>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductShowcase;
