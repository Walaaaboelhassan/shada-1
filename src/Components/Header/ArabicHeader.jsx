import React, { useContext, useState } from "react";
import "./Header.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo1.png";
import DropDown from "../DropDown/DropDown";
import { motion } from "framer-motion";

function ArabicHeader() {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  console.log(location.pathname.includes("about"));

  return (
    <div className="fixed header">
      <div className="inner-header flex items-center justify-center flex-row-reverse">
        <div className="logo">
          <img className="w-10 h-10" src={logo} alt="logo" />
        </div>
        <ul className="list flex flex-row-reverse gap-6">
          <li>
            <Link
              to="#"
              className={`${
                location.pathname.includes("about") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              عن الجمعية
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link to="about/goals"> أهداف الجمعية</Link>
                <Link to="about/activities"> أنشطة الجمعية</Link>
                <Link to="about/add-members"> أعضاء المجلس الإدارة</Link>
                <Link to="about/executive"> الفريق التنفيذي</Link>
                <Link to="about/members"> أعضاء الجمعية</Link>
                <Link to="about/administrative"> الهيكل الإداري للجمعية</Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="gallery"
              className={`${
                location.pathname.includes("gallery") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              وسائط الجمعية
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`${
                location.pathname.includes("projects") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              مشاريع الجمعية
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`${
                location.pathname.includes("commitment") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الحوكمة و اإللتزام
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link to="commitment/parallel-list">الموازنة المالية </Link>
                <Link to="commitment/financial-list"> القوائم المالية</Link>
                <Link to="commitment/future-plan"> الخطة المستقبلية</Link>
                <Link to="commitment/criteria">معيار الحوكمة و الإلتزام</Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="services"
              className={`${
                location.pathname.includes("services") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              الخدمات اإللكترونية
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link to="services/sponsors"> الرعاة</Link>
                <Link to="services/memberships"> العضويات</Link>
                <Link to="services/products"> المنتوجات</Link>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="#"
              className={`${
                location.pathname.includes("contact") ? "!text-[black]" : ""
              }`}
            >
              {" "}
              تواصل معنا​
            </Link>
            <div className="nested-list">
              <div className="links !items-end">
                <Link to="contact/complains"> المقترحات و الشكاوى</Link>
                <Link to="contact/hiring"> التوظيف</Link>
                <Link to="contact/about"> التطوع</Link>
              </div>
            </div>
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
