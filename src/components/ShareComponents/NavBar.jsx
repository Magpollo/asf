import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Slide } from 'react-reveal';
import logo from '../../assets/ASF_logo.png';
import greenBg from '../../assets/green.png';

const NavBar = () => {
  const [isClicked, setClicked] = useState(false);

  //when the navbar is open, the body will be fixed
  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
    }
  }, [isClicked]);

  const commonLi = (
    <>
      <li className="lg:py-0 py-3">
        <NavLink
          onClick={() => setClicked(false)}
          className={({ isActive }) =>
            `${
              isActive ? 'text-red-500' : 'text-gray-100'
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to={'/'}
        >
          Home
        </NavLink>
      </li>
      <li className="lg:py-0 py-3">
        <NavLink
          onClick={() => setClicked(false)}
          className={
            'text-gray-100 hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold'
          }
          to={'/'}
        >
          View Menu
        </NavLink>
      </li>
      <li className="lg:py-0 py-3">
        <NavLink
          onClick={() => setClicked(false)}
          className={({ isActive }) =>
            `${
              isActive ? 'text-red-500' : 'text-gray-100'
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to={'/catering'}
        >
          Catering
        </NavLink>
      </li>
      <li className="lg:py-0 py-3">
        <NavLink
          onClick={() => setClicked(false)}
          className={({ isActive }) =>
            `${
              isActive ? 'text-red-500' : 'text-gray-100'
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to="/private-dining"
        >
          Private Dining
        </NavLink>
      </li>

      <li className="lg:py-0 py-3">
        <NavLink
          className="text-gray-100 hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold"
          onClick={() =>
            window.location.replace(
              'https://www.toasttab.com/theafricansoulfood/v3'
            )
          }
          to={'/'}
        >
          Order Online
        </NavLink>
      </li>
      <li className="lg:py-0 py-3">
        <NavLink
          onClick={() => setClicked(false)}
          className={({ isActive }) =>
            `${
              isActive ? 'text-red-500' : 'text-gray-100'
            } hover:text-yellow-300 transition-all duration-500 ease-in-out font-bold`
          }
          to="/careers"
        >
          Careers
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <section className="container relative mx-auto w-full px-4 lg:px-24">
        <nav
          className="flex justify-between items-center py-5 "
          id="backToTop"
        >
          <div style={{ zIndex: '6' }}>
            <Link to="/">
              <img
                src={logo}
                className="h-10 "
              />
            </Link>
          </div>
          {/* Mobile menu here start*/}
          <div
            style={{ zIndex: '4' }}
            // style={{ display: "block", width: "100%" }}
            className=" lg:hidden block"
          >
            {/* Hamburger Icon */}
            <label
              onClick={() => setClicked(!isClicked)}
              tabIndex={0}
              className="btn btn-primary lg:hidden"
            >
              {isClicked ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff0000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff0000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </label>
            <ul
              style={{
                backgroundImage: `url(${greenBg})`,
                zIndex: '-1',
                fontSize: '2em',
                lineHeight: '8vh',
                fontFamily: "'Zilla Slab', sans-serif",
                margin: 'auto',
                textAlign: 'center',
                transition: 'opacity 0.4s ease-in-out',
                opacity: isClicked ? 1 : 0,
                paddingTop: '20vh',
                display: isClicked ? 'block' : 'none',
              }}
              tabIndex={0}
              className="mx-auto left-0 h-full w-full fixed top-0"
            >
              {/* this menu for mobile */}
              {commonLi}
            </ul>
          </div>

          {/* Mobile menu here End*/}

          {/* Desktop menu here start*/}
          <div className="hidden lg:block">
            <ul className="flex gap-4 left-0 justify-center items-center text-xl px-0 text-secondary">
              {commonLi}
            </ul>
          </div>

          {/* Desktop menu here End*/}
        </nav>
      </section>
    </>
  );
};

export default NavBar;
