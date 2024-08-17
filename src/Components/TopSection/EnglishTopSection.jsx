import React, { useState } from "react";
import "./TopSection.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";

function EnglishTopSection({ title, content }) {
  return (
    <div className="top-section overflow-hidden">
      <div className="above ">
        <div className="info">
          <h1 className="title">{title} </h1>
          <p>{content}</p>
        </div>
        <div className="social-media-icon right-0 overflow-hidden">
          <motion.div
            initial={{ right: "-186px" }}
            whileHover={{ right: "0" }}
            transition={{ duration: 0.3 }}
            className="facebook icon-cover gap-3 bg-[#3b5998] !justify-end flex-row-reverse"
          >
            <p> Follow us on Facebook</p>
            <a className="icon w-10 h-10">
              <RiFacebookCircleLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ right: "-186px" }}
            whileHover={{ right: "0" }}
            transition={{ duration: 0.3 }}
            className="instagram icon-cover gap-3 bg-[#125688] !justify-end flex-row-reverse"
          >
            <p>Follow us on Instagram</p>
            <a className="icon w-10 h-10">
              <RiInstagramLine />
            </a>
          </motion.div>
          <motion.div
            initial={{ right: "-186px" }}
            whileHover={{ right: "0" }}
            transition={{ duration: 0.3 }}
            className="X icon-cover gap-3 bg-[#55acee] !justify-end flex-row-reverse"
          >
            <p>Follow us on X </p>
            <a className="icon w-10 h-10">
              <RiTwitterXFill />
            </a>
          </motion.div>
          <motion.div
            initial={{ right: "-186px" }}
            whileHover={{ right: "0" }}
            transition={{ duration: 0.3 }}
            className="linkedin icon-cover gap-3 bg-[blue] !justify-end flex-row-reverse"
          >
            <p>Follow us on Linkedin</p>
            <a className="icon w-10 h-10">
              <RiLinkedinFill />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EnglishTopSection;
