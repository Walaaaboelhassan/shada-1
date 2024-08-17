import React from "react";
import mount from "../../../images/5881775159038296685.jpg";
import Icons from "../../socialMedia/socialMediaLinks";
import { motion } from "framer-motion";
import SmallTitle from "../../SmallTitle/SmallTitle";

function EnglishJoin() {
  return (
    <div className="">
      <div className="join-us min-h-[100vh] flex justify-center items-center gap-4 ">
        <div className="image">
          <img src={mount} alt="mount" />
        </div>
        <div className="cover border-[12px] absolute"></div>
        <div className="info !text-start">
          <div className="title !text-start">
            <h1>Join Us​</h1>
          </div>
          <div className="paragraph">
            <p>
              Be a part of the Shada Mountain Sports Association and embark on
              an adventure through the breathtaking landscapes of the Al-Baha
              region. Whether you are a beginner looking to explore or an
              experienced mountaineer, our community welcomes you to experience
              the thrill and beauty of mountain sports.​
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us ">
        <div className="info">
          <SmallTitle title="Contact Us​" />
          <div className="paragraph">
            <p>
              For more information, membership details, or sponsorship
              opportunities, please contact us through our website or social
              media channels. Let’s reach new heights together with the Shada
              Mountain Sports Association.​
            </p>
          </div>
        </div>
        <div className="contact-form-info">
          <form className="form">
            <input type="text" id="username" placeholder="Your name" />
            <input type="email" id="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <input type="submit" value="Submit" />
          </form>
          <div className="contact-side-info !text-start">
            <div className="back"></div>
            <div className="title">
              <h1>Contact us for any information</h1>
            </div>
            <div className="contact-me">
              <h4>Location</h4>
              <address className="capitalize">
                The Arabian Saudi Kingdom – Al-Baha
              </address>
            </div>
            <div className="contact-me">
              <h4>Phone && Email</h4>
              <address className="">
                SHADAMOUNTAINSPORTS@GMAIL.COM <br />
                <strong className="">&&</strong>
                <br /> 0551471042
              </address>
            </div>
            <div className="contact-me">
              <h4>Follow us </h4>
              <div className="icons">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishJoin;
