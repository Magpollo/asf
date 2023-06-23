import React from 'react';
import PrivateEventDining from '../components/CateringComponents/PrivateEventComponents/PrivateEventDining';
import Pattern from '../assets/Pattern.png';
import usePageTitle from '../Hooks/usePageTitle';

const PrivateEventPage = () => {
  usePageTitle('Private Dining | Book your event today!');
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
        <div className="container mx-auto pt-20">
          <PrivateEventDining />
        </div>
      </section>
    </>
  );
};

export default PrivateEventPage;
