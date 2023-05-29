import React from 'react';
import { Slide, Zoom } from 'react-reveal';
import ButtonOne from '../ShareComponents/ButtonOne';
import { Link } from 'react-router-dom';

const CateringMenu = () => {
  return (
    <>
      <section>
        <Slide
          bottom
          cascade
        >
          <h1
            className="text-7xl text-center text-gray-100 pt-12"
            style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          >
            Catering
          </h1>
          <h2
            className="text-5xl text-center text-gray-100 pt-12 px-7 md:px-0 leading-normal"
            style={{ fontFamily: "'Jelytta', sans-serif" }}
          >
            Bring African Soulfood to your next event!
          </h2>
          <p className="text-xl text-center text-gray-100 w-[75%] pt-12 mx-auto break-normal">
            Elevate your next event with the authentic flavors of Africa!
            African Soulfood offers customizable menus for personal and
            household events. Choose from quick pick-up/delivery options via EZ
            Cater or submit an event inquiry for larger caterings and
            full-service events. Contact us now to create a memorable dining
            experience from your own location.
          </p>
        </Slide>

        <Slide
          bottom
          cascade
          duration={1500}
        >
          <div className="flex flex-col md:flex-row gap-6 my-5 w-fit mx-auto">
            <ButtonOne>CATERING MENUS</ButtonOne>
            <ButtonOne>EZ CATER</ButtonOne>
            <Link to="/events">
              <ButtonOne>CATERING INQUIRY</ButtonOne>
            </Link>
          </div>
        </Slide>
        <div className="grid grid-cols-2 lg:gap-3 gap-0 items-center p-4">
          <Zoom
            bottom
            big
            cascade
            duration={1500}
          >
            <img
              src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685391401/asf/IMG_4670_ipavix.jpg"
              alt=""
              className="w-full"
            />
            <img
              src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685391426/asf/IMG_4689_ewq4yq.jpg"
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
