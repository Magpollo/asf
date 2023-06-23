import React from 'react';
import SwiperCarousel from '../components/HomePageComponents/Carousel/SwiperCarousel';
import ProductShowcase from '../components/HomePageComponents/ProductShowcase';
import CallToAction from '../components/HomePageComponents/CallToAction';
import MakeReservation from '../components/HomePageComponents/MakeReservation';
import bgPattern from '../assets/Pattern.png';
import usePageTitle from '../Hooks/usePageTitle';
import { Bounce } from 'react-reveal';

const HomePage = () => {
  usePageTitle('Home Page');
  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: `url(${bgPattern})`,
            width: '100%',
            zIndex: '-1',
            marginTop: '-30vh',
          }}
          className="mx-auto pt-28"
        >
          <SwiperCarousel />
          <ProductShowcase />
          <MakeReservation />
          <CallToAction />
        </section>
      </main>
    </>
  );
};

export default HomePage;
