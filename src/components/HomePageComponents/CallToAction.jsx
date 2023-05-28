import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-reveal';
import bgPattern from '../../assets/green.png';
import africa from "../../assets/africa.png";

const CallToAction = () => {
  return (
    <section className="py-12" style={{
      backgroundImage: `url(${bgPattern})`,
      width: "100%",
      zIndex: "-1",
      marginTop: "0px",
    }}>
      <Slide bottom>
      <h1 className="lg:text-5xl text-3xl text-gray-100 text-center" >
        Celebrate your special occasion at African Soul Food
      </h1>
      <h2 className="lg:text-2xl text-xl text-gray-100 text-center my-12">
        For Reservations:{" "}
        <a
          className="text-red-500 border-b-2 border-red-500"
          href="tel:+17707950707">
          (770) 795-0707
        </a>{" "}
        or{" "}
        <Link className="text-red-500 border-b-2 border-red-500" to={"/"}>
          Order Online
        </Link>
      </h2>
      <h1
        style={{ fontFamily: "'Jelytta', sans-serif" }}
        className="text-6xl font-bold text-center text-gray-100">
        Location
      </h1>
      <p className="text-2xl text-center text-gray-100 my-8">
        585 Franklin Gateway
        <br />
        Marietta, GA 30067
        </p>
        </Slide>
      <div className="grid lg:grid-cols-3 gap-3 items-center justify-center">
      <Slide bottom>
        <img
          src={africa}
          alt=""
          className="lg:w-1/2 md:w-1/4 w-1/4 mx-auto my-5"
          />
        </Slide>
        <Slide bottom>
        <div>
          <div className="my-5">
            <h1
              style={{ fontFamily: "'Jelytta', sans-serif" }}
              className="text-6xl font-bold text-center text-gray-100">
              Parking:
            </h1>
            <p className="text-xl text-center text-gray-100 my-8">
              Our community parking deck is located at
              <br />
              585 Franklin Gateway, Marietta, GA 30067
            </p>
          </div>
          <div className="my-5">
            <h1
              style={{ fontFamily: "'Jelytta', sans-serif" }}
              className="text-6xl font-bold text-center text-gray-100">
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
          </div>
          </Slide>
        <Slide bottom>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Stamp-kenya1963-coffee-industry.jpeg"
          alt=""
          className="lg:w-1/2 md:w-1/4 w-1/4 mx-auto my-5"
          />
          </Slide>
      </div>
    </section>
  );
};

export default CallToAction;
