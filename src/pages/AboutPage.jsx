import React from "react";
import Pattern from "../assets/Pattern.png";
import usePageTitle from "../Hooks/usePageTitle";

const AboutPage = () => {
  usePageTitle("About Page");
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Pattern})`,
          width: "100%",
          zIndex: "-1",
          marginTop: "-88px",
        }}>
        <h1 className="text-5xl text-center text-gray-100 pt-40 h-screen">
          This is about page coming soon
        </h1>
      
      </section>
    </>
  );
};

export default AboutPage;
