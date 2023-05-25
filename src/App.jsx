import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomSpinner from "./components/ShareComponents/CustomSpinner";
import NavBar from "./components/ShareComponents/NavBar";
import FooterSection from "./components/ShareComponents/FooterSection";
// Pages imported
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/ShareComponents/ErrorPage";
import EvenCoOrdinatorPage from "./pages/EvenCoOrdinatorPage";
import CateringPage from "./pages/CateringPage";
import PrivateEventPage from "./pages/PrivateEventPage";
import AboutPage from "./pages/AboutPage";
import { Element } from "react-scroll";
import bgPattern from "./assets/Pattern.png";

function App() {
  const WrappedHomePage = CustomSpinner(HomePage);
  const WrappedEvenCoOrdinatorPage = CustomSpinner(EvenCoOrdinatorPage);
  const WrappedCateringPage = CustomSpinner(CateringPage);
  const WrappedPrivateEventPage = CustomSpinner(PrivateEventPage);
  const WrappedAboutPage = CustomSpinner(AboutPage);
  const WrappedAErrorPage = CustomSpinner(ErrorPage);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Element name="homeScroll">
              <WrappedHomePage />
            </Element>
          }
        />
        <Route
          path="/careers"
          element={
            <Element name="careersScroll">
              <WrappedEvenCoOrdinatorPage />
            </Element>
          }
        />
        <Route
          path="/catering"
          element={
            <Element name="cateringScroll">
              <WrappedCateringPage />
            </Element>
          }
        />
        <Route
          path="/private-dining"
          element={
            <Element name="privateDiningScroll">
              <WrappedPrivateEventPage />
            </Element>
          }
        />
        <Route
          path="/about"
          element={
            <Element name="aboutScroll">
              <WrappedAboutPage />
            </Element>
          }
        />
        {/* Error Page */}
        <Route path="*" element={<WrappedAErrorPage />} />
      </Routes>
      {/* Footer is separated component */}
      <FooterSection />
    </>
  );
}

export default App;
