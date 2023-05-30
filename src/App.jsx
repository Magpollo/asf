import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomSpinner from './components/ShareComponents/CustomSpinner';
import NavBar from './components/ShareComponents/NavBar';
import FooterSection from './components/ShareComponents/FooterSection';
// Pages imported
import HomePage from './pages/HomePage';
import ErrorPage from './components/ShareComponents/ErrorPage';
import CareerForm from './pages/CareerForm';
import CateringPage from './pages/CateringPage';
import PrivateDining from './pages/PrivateDining';
import EventsForm from './pages/BookEvent';
import { Element } from 'react-scroll';
import bgPattern from './assets/Pattern.png';

function App() {
  const WrappedHomePage = CustomSpinner(HomePage);
  const WrappedCareersPage = CustomSpinner(CareerForm);
  const WrappedCateringPage = CustomSpinner(CateringPage);
  const WrappedPrivateDining = CustomSpinner(PrivateDining);
  const WrappedEventsForm = CustomSpinner(EventsForm);
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
              <WrappedCareersPage />
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
          path="/events"
          element={
            <Element name="aboutScroll">
              <WrappedEventsForm />
            </Element>
          }
        />
        <Route
          path="/private-dining"
          element={
            <Element name="privateDiningScroll">
              <WrappedPrivateDining />
            </Element>
          }
        />

        {/* Error Page */}
        <Route
          path="*"
          element={<WrappedAErrorPage />}
        />
      </Routes>
      {/* Footer is separated component */}
      <FooterSection />
    </>
  );
}

export default App;
