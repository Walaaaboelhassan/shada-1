import React, { useState } from "react";
import "./Header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../images/logo1.png";

function ArabicHeader() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="fixed header">
      <div className="inner-header flex items-center justify-center flex-row-reverse">
        <div className="logo">
          <img className="w-10 h-10" src={logo} alt="logo" />
        </div>
        <ul className="list flex flex-row-reverse gap-6">
          <li>
            <Link to="about"> عن الجمعية</Link>
          </li>
          <li>
            <Link to="gallery"> وسائط الجمعية</Link>
          </li>
          <li>
            <Link to="projects"> مشاريع الجمعية</Link>
          </li>
          <li>
            <Link to="commitment"> الحوكمة و اإللتزام</Link>
          </li>
          <li>
            <Link to="services"> الخدمات اإللكترونية</Link>
          </li>
          <li>
            <Link to="sponsors"> الجهات الداعمه و الراعية</Link>
          </li>
          <li>
            <Link to="join-us"> انضم لنا</Link>
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
        <ul className="list flex flex-row-reverse gap-6">
          <li>
            <Link to="about"> عن الجمعية</Link>
          </li>
          <li>
            <Link to="gallery"> وسائط الجمعية</Link>
          </li>
          <li>
            <Link to="projects"> مشاريع الجمعية</Link>
          </li>
          <li>
            <Link to="commitment"> الحوكمة و اإللتزام</Link>
          </li>
          <li>
            <Link to="services"> الخدمات اإللكترونية</Link>
          </li>
          <li>
            <Link to="sponsors"> الجهات الداعمه و الراعية</Link>
          </li>
          <li>
            <Link to="join-us"> انضم لنا</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ArabicHeader;
