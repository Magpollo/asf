import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ASF_logo.png";

const NavBar = () => {
  const [isClicked, setClicked] = useState(false);

  const commonLi = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to={"/"}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to={"/catering"}>
          Catering
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/private-dining">
          Private Dining
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/careers">
          Careers
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : undefined
          }
          to="/about">
          About
        </NavLink>
      </li>
      <li>
        <button className="btn hover:animate-bounce btn-primary active:text-gray-100">
          View Menu
        </button>
      </li>
    </>
  );
  return (
    <>
      
    <section className="container mx-auto">
      <nav className="flex justify-between  py-5" id="backToTop">
         <div className="">
          <Link to="/">
            <img src={logo} alt="" className="h-10" />
          </Link>
        </div>
        {/* Mobile menu here start*/}
        <div className="lg:hidden block relative">
          <div
            // style={{ display: "block", width: "100%" }}
            className="absolute right-0">
            {/* Hamburger Icon */}
            <label
              onClick={() => setClicked(!isClicked)}
              tabIndex={0}
              className="btn btn-primary lg:hidden">
              {isClicked ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff0000">
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
              tabIndex={0}
              className={`${
                !isClicked ? "hidden " : undefined
              } absolute bg-base-100 mt-3 p-2 right-8 rounded-box shadow w-[90%] z-[1]`}>
              {/* this menu for mobile */}
              {commonLi}
            </ul>
          </div>
          
        </div>
        {/* Mobile menu here End*/}
        
       {/* Desktop menu here start*/}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal px-1 text-secondary">
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
