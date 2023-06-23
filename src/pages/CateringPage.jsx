import React from 'react';
import CateringSwiperCarousel from '../components/CateringComponents/CateringCarousel/CateringSwiperCarousel';
import Pattern from '../assets/Pattern.png';
import CateringMenu from '../components/CateringComponents/CateringMenu';
import usePageTitle from '../Hooks/usePageTitle';
import { Fade } from 'react-reveal';

const CateringPage = () => {
  usePageTitle('Catering | African Soul Food');

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: '100%',
          zIndex: '-1',
          marginTop: '-20vh',
        }}
      >
        <div className="container mx-auto py-16 pt-28">
          <Fade
            bottom
            duration={1500}
          >
            <CateringSwiperCarousel />
          </Fade>
          <CateringMenu />
        </div>
      </section>
    </>
  );
};

export default CateringPage;
