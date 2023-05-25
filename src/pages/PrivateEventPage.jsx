import React from "react";
import PrivateEventDining from "../components/CateringComponents/PrivateEventComponents/PrivateEventDining";
import Pattern from "../assets/Pattern.png";
import usePageTitle from "../Hooks/usePageTitle";

const PrivateEventPage = () => {
  usePageTitle("Private Event Page");
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
          marginTop: "-88px",
        }}>
        <div className="container mx-auto">
          <PrivateEventDining />
        </div>
      </section>
    </>
  );
};

export default PrivateEventPage;
