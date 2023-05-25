import React from "react";
import { Zoom, Fade, Flip, Bounce } from "react-reveal";
import bgPattern from "../../assets/cream.png";
const MakeReservation = () => {
  return (
    <section style={{
      backgroundImage: `url(${bgPattern})`,
      width: "100%",
      zIndex: "-1",
      marginTop: "0px",
    }}>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-16 items-center">
        <Fade bottom big cascade duration={1500}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/303d6de6-a07c-4f7a-9de3-744057968861/Atlanta-middle-eastern-cuisine.jpg?format=750w"
            alt=""
            className="rounded-md"
          />
        </Fade>
        <Fade bottom big cascade duration={1500}>
          <h2
            style={{ fontFamily: "'Jelytta', sans-serif" }}
            className="lg:text-6xl text-3xl font-bold text-center text-gray-100">
            A crossroad of flavors and cultures.
          </h2>
        </Fade>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-16 items-center lg:px-1 lg:py-24 p-2 lg:my-1 my-12">
        <Fade bottom big cascade duration={1500}>
          <div>
            <p className="text-xl lg:mr-9 text-gray-100">
              Centuries of talented cooks and exceptional palettes have played a
              role in forming what we recognize today as Middle Eastern cuisine.
              <br />
              <br />
              When you enter our African Soul Food we want you to feel like you
              have met new friends - a new family - who will guide you through
              our region's most memorable offerings, we hope to transport you to
              country sides of Iran, where we all sit around the table and wait
              to be blown away by our mothers and grandmothers cooking while
              enjoying the company of our favorite people.
            </p>
            <button className="btn hover:animate-pulse text-gray-100 btn-lg mt-8">
              MAKE A RESERVATION
            </button>
          </div>
        </Fade>
        <Fade bottom big cascade duration={1500}>
          <div className="grid lg:grid-cols-2 grid-cols-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/53005c28-587d-4557-991f-cd73e417a241/Middle+Eastern+Seabass+vegetables.png?format=500w"
              alt=""
              className="rounded-md lg:max-w-sm lg:max-h-96"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/6813ac3c-42e8-4480-adcc-20887753dba4/middle-eastern-kookoo-sabzi+-atlanta+copy.png?format=500w"
              alt=""
              className="rounded-md lg:max-w-sm lg:max-h-96"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default MakeReservation;
