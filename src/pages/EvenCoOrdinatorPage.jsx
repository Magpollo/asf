import React from "react";
import ContactForm from "../components/CoOrdinateComponents/ContactForm";
import Pattern from "../assets/Pattern.png";
import usePageTitle from "../Hooks/usePageTitle";

const EvenCoOrdinatorPage = () => {
  usePageTitle("Event Coordinator Page");
  return (
    <section
      style={{
        backgroundImage: `url(${Pattern})`,
        width: "100%",
        zIndex: "-1",
        marginTop: "-88px",
      }}>
      <div className="container mx-auto py-24">
        <ContactForm />
      </div>
    </section>
  );
};

export default EvenCoOrdinatorPage;
