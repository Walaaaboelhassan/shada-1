import React, { useState } from "react";
import "./TopSection.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";

function ArabicTopSection({ title, content }) {
  return (
    <div className="top-section overflow-hidden">
      <div className="above ">
        <div className="info">
          <h1 className="title">{title} </h1>
          <p>{content}</p>
        </div>
        <div className="social-media-icon">
          <motion.div
            initial={{ left: "-140px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="facebook icon-cover gap-3 bg-[#3b5998]"
          >
            <p>تابعنا على فيسبوك</p>
            <a className="icon w-10 h-10">
              <RiFacebookCircleLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-140px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="instagram icon-cover gap-3 bg-[#125688]"
          >
            <p> تابعنا على إنستغرام</p>
            <a className="icon w-10 h-10">
              <RiInstagramLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-140px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="X icon-cover gap-3 bg-[#55acee]"
          >
            <p> تابعنا على منصة</p>
            <a className="icon w-10 h-10">
              <RiTwitterXFill />
            </a>
          </motion.div>
          <motion.div
            initial={{ left: "-140px" }}
            whileHover={{ left: "0" }}
            transition={{ duration: 0.3 }}
            className="linkedin icon-cover gap-3 bg-[blue]"
          >
            <p> تابعنا على لينكدن</p>
            <a className="icon w-10 h-10">
              <RiLinkedinFill />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ArabicTopSection;
