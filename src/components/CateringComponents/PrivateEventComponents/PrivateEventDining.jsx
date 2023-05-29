import React from 'react';
import { Zoom, Slide } from 'react-reveal';
import ButtonOne from '../../ShareComponents/ButtonOne';
import { Link } from 'react-router-dom';

const PrivateEventDining = () => {
  return (
    <>
      <section className="pb-20 pt-12">
        <Slide
          bottom
          duration={1500}
        >
          <h1
            className="text-7xl text-center text-gray-100 pt-20 pb-10 md:pb-0"
            style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          >
            Private Dining
          </h1>
        </Slide>
        <div className="grid grid-cols-2 lg:gap-3 gap-0 items-center h-fit">
          <Zoom
            bottom
            big
            cascade
            duration={1500}
          >
            <img
              src="https://www.allrecipes.com/thmb/L5tOrLzbNbdV8lyKZ_Y7y3MCE1Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-hold-your-knife-correctly-AdobeStock_510545189-3x2-1-2fe1e62ed82044689ea838650a414fe5.jpg"
              alt=""
              className="w-full lg:h-[75%]"
            />
            <img
              src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685392021/asf/IMG_4642_toplkq.jpg"
              alt=""
              className="w-full lg:h-[75%]"
            />
          </Zoom>
        </div>
        <Slide
          bottom
          big
        >
          <h2
            className="lg:text-5xl text-3xl text-center text-gray-100 mb-10 mt-10 md:mt-0"
            style={{ fontFamily: "'Jelytta', sans-serif" }}
          >
            Let's host your next event!
          </h2>
          <div className="flex flex-col md:flex-row md:gap-16 justify-center w-fit mx-auto">
            <ButtonOne>SET MENUS</ButtonOne>
            <ButtonOne>ROOM MINIMUMS</ButtonOne>
          </div>
          <p className="text-xl text-center text-gray-100 lg:w-[50%] w-[80%] pt-12 mx-auto">
            For more information about a private dinner or group event at
            African Soul Food, please click on “Book An Event” and fill out the
            inquiry form.
          </p>
          <div className="flex gap-16 justify-center mt-5">
            <Link to="/events">
              <ButtonOne>BOOK AN EVENT</ButtonOne>
            </Link>
          </div>
        </Slide>
        <div className="grid grid-cols-2 gap-0 items-center h-fit">
          <Zoom
            bottom
            big
            cascade
            duration={1500}
          >
            <img
              src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685392009/asf/IMG_4661_o4qiqg.jpg"
              alt=""
              className="w-full lg:h-[75%]"
            />
            <img
              src="https://res.cloudinary.com/dqpzrfqgh/image/upload/v1685392032/asf/IMG_4686_k2e630.jpg"
              alt=""
              className="w-full lg:h-[75%]"
            />
          </Zoom>
        </div>
      </section>
    </>
  );
};

export default PrivateEventDining;
