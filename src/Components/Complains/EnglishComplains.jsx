import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";
import Icons from "../socialMedia/socialMediaLinks";

function EnglishComplains() {
  return (
    <div className="contact-us">
      <div className="info">
        <SmallTitle title="الشكاوى والمقترحات" />
      </div>
      <div className="contact-form-info">
        <form className="form">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="text-end"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="text-end"
          />
          <textarea
            name="message"
            placeholder="Suggestion or Complain"
            className="text-end"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
        <div className="contact-side-info">
          <div className="back"></div>
          <div className="title">
            <h1>Contact us for any information</h1>
          </div>
          <div className="contact-me">
            <h4>Location</h4>
            <address>المملكة العربية السعودية – الباحة</address>
          </div>
          <div className="contact-me">
            <h4>Phone && Email</h4>
            <address className="text-center">
              SHADAMOUNTAINSPORTS@GMAIL.COM <br />
              <strong className="">&&</strong>
              <br /> 0551471042
            </address>
          </div>
          <div className="contact-me">
            <h4> Follow us </h4>
            <div className="icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishComplains;
