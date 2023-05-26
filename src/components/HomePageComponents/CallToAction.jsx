import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import bgPattern from "../../assets/green.png";

const CallToAction = () => {
  return (
    <section className="py-32" style={{
      backgroundImage: `url(${bgPattern})`,
      width: "100%",
      zIndex: "-1",
      marginTop: "0px",
    }}>
      <Fade>
      <h1 className="lg:text-5xl text-3xl text-gray-100 text-center">
        Celebrate your special occasion at African Soul Food
      </h1>
      <h2 className="lg:text-4xl text-xl text-gray-100 text-center my-12">
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
        </Fade>
      <div className="grid lg:grid-cols-3 gap-3 items-center justify-center">
      <Fade bottom big cascade duration={1000}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/c5a4a396-0b85-4f33-9e78-a08d54f53f98/mamoni.png?format=300w"
          alt=""
          className="lg:w-1/2 md:w-1/2 w-full mx-auto my-5"
          />
        </Fade>
        <Fade bottom big cascade duration={1000}>
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
          </Fade>
        <Fade bottom big cascade duration={1000}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Stamp-kenya1963-coffee-industry.jpeg"
          alt=""
          className="lg:w-1/2 md:w-1/2 w-full mx-auto my-5"
          />
          </Fade>
      </div>
    </section>
  );
};

export default CallToAction;
