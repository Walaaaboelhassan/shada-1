import React, { useState } from "react";
import "./Header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../images/logo1.png";

function EnglishHeader() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="fixed header">
      <div className="inner-header flex items-center justify-center ">
        <div className="logo">
          <img className="w-10 h-10" src={logo} alt="logo" />
        </div>
        <ul className="list flex  gap-6">
          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="gallery"> Publishing media</Link>
          </li>
          <li>
            <Link to="projects"> Projects</Link>
          </li>
          <li>
            <Link to="commitment">Governance and Compliance</Link>
          </li>
          <li>
            <Link to="services"> Services</Link>
          </li>
          <li>
            <Link to="sponsors">Supporting and Sponsoring </Link>
          </li>
          <li>
            <Link to="join-us"> Join us</Link>
          </li>
        </ul>
        {/* <div className="donate w-10 h-10"></div> */}
        <div
          onClick={() => setShowNavbar(!showNavbar)}
          className="sidebar-icon w-10 h-10"
        >
          <span className="w-10 h-10 block cursor-pointer">
            {showNavbar ? <IoClose /> : <IoReorderThreeOutline />}
          </span>
        </div>
      </div>
      <div
        className={`side-bar-header ${
          showNavbar ? "!top-[55px]" : "!top-[-500px]"
        }`}
      >
        <ul className="list flex  gap-6">
          <li className="text-start">
            <Link to="about"> About</Link>
          </li>
          <li className="text-start">
            <Link to="gallery"> Publishing media</Link>
          </li>
          <li className="text-start">
            <Link to="projects"> Projects</Link>
          </li>
          <li className="text-start">
            <Link to="commitment">Governance and Compliance</Link>
          </li>
          <li className="text-start">
            <Link to="services"> Services</Link>
          </li>
          <li className="text-start">
            <Link to="sponsors">Supporting and Sponsoring </Link>
          </li>
          <li className="text-start">
            <Link to="join-us"> Join us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EnglishHeader;
