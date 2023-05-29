import React from 'react';
import Pattern from '../assets/Pattern.png';
import usePageTitle from '../Hooks/usePageTitle';
import ContactForm from '../components/CoOrdinateComponents/ContactForm';

const EventPage = () => {
  usePageTitle('About Page');
  return (
    <section
      style={{
        backgroundImage: `url(${Pattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '-88px',
      }}
    >
      <div className="container mx-auto py-24">
        <h1
          className="text-5xl text-center text-gray-100 pt-12 font-bold"
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
        >
          Event Request
        </h1>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="text-3xl text-center text-gray-100 py-5"
        >
          Contact our event coordinator today!
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default EventPage;
