import React from 'react';
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import bgPattern from '../../assets/cream.png';
import ButtonOne from '../ShareComponents/ButtonOne';
const ProductShowcase = () => {
  return (
    <section
      className="lg:py-2 py-2 "
      style={{
        backgroundImage: `url(${bgPattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '0px',
      }}
    >
      <Slide bottom>
        <h2
          style={{ fontFamily: "'Jelytta', sans-serif" }}
          className="md:text-6xl text-3xl text-center my-10 text-black-100 px-5 md:px-0"
        >
          African Flavour Beckons
        </h2>
      </Slide>
      <Slide bottom>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-5xl text-2xl font-bold p-2 max-w-3xl mx-auto text-center text-black-100"
        >
          Our dishes, rooted in tradition, bring the soulful warmth of African
          cuisine to your plate.
        </h1>
      </Slide>
      <Slide bottom>
        <p className="lg:text-2xl p-2 text-xl text-black-100 max-w-xl mx-auto text-center my-10">
          Savor the flavors of Africa at African Soul Food . Join us for a
          memorable dining experience and explore the culinary wonders of the
          continent.{' '}
          <Link className="text-red-500 border-b-2 border-red-500">
            View Menu
          </Link>
        </p>
      </Slide>
      <div className="max-w-xl mx-auto text-center">
        <Slide bottom>
          <ButtonOne
            onClick={() =>
              window.location.replace(
                'https://www.toasttab.com/theafricansoulfood/v3'
              )
            }
          >
            Order Online
          </ButtonOne>
        </Slide>

        <Slide bottom>
          <ButtonOne>Make Reservation</ButtonOne>
        </Slide>
      </div>
    </section>
  );
};

export default ProductShowcase;
