import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';
import bgPattern from '../../assets/green.png';
import africa from '../../assets/africa.png';

const CallToAction = () => {
  return (
    <section
      className="py-12"
      style={{
        backgroundImage: `url(${bgPattern})`,
        width: '100%',
        zIndex: '-1',
        marginTop: '0px',
      }}
    >
      <Slide bottom>
        <h1
          style={{ fontFamily: "'Zilla Slab', sans-serif" }}
          className="lg:text-5xl text-3xl text-gray-100 text-center mb-10 px-2 md:px-0"
        >
          Celebrate your special occasion at African Soul Food
        </h1>
      </Slide>
      <div className="grid lg:grid-cols-3 gap-3 items-center justify-center">
        <div className="order-2">
          <Slide bottom>
            <div className="my-5">
              <h1
                style={{ fontFamily: "'Jelytta', sans-serif" }}
                className="text-3xl lg:text-5xl font-bold text-center text-gray-100"
              >
                Opening Hours:
              </h1>
              <p className="text-xl text-center text-gray-100 my-8">
                Mon - Fri: 8am - 8pm
                <br />
                Saturday: 9am - 7pm
                <br />
                Sunday: 9am - 8pm
              </p>
            </div>
            <div className="my-5">
              <h1
                style={{ fontFamily: "'Jelytta', sans-serif" }}
                className="text-3xl lg:text-5xl font-bold text-center text-gray-100"
              >
                Location
              </h1>
              <p className="text-xl text-center text-gray-100 my-8">
                585 Franklin Gateway
                <br />
                Marietta, GA 30067
              </p>
            </div>
            <div className="my-5">
              <h1
                style={{ fontFamily: "'Jelytta', sans-serif" }}
                className="text-3xl md:text-5xl font-bold text-center text-gray-100"
              >
                Contact
              </h1>
              <p className="text-xl text-center text-gray-100 my-8">
                <a
                  href="tel:+17707590707"
                  className="hover:text-[#F7CC32] transition-all duration-200 ease-in-out delay-75"
                >
                  (770) 759-0707
                </a>{' '}
                <br />
                <a
                  href="mailto:info@africansoulfood.com"
                  className="hover:text-[#F7CC32] transition-all duration-200 ease-in-out delay-75"
                >
                  info@africansoulfood.com{' '}
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <Slide bottom>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/76/Stamp-kenya1963-coffee-industry.jpeg"
            alt=""
            className="lg:w-1/2 md:w-1/4 w-1/4 mx-auto my-5 order-last md:order-1"
          />
        </Slide>
        <Slide bottom>
          <img
            src={africa}
            alt=""
            className="lg:w-1/2 md:w-1/4 w-1/4 mx-auto my-5 order-1 md:order-last"
          />
        </Slide>
      </div>
    </section>
  );
};

export default CallToAction;
