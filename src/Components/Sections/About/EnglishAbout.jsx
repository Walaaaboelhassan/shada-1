import React, { useEffect } from "react";
import "./About.css";
import doctor from "../../../images/doctors2.png";
import member1 from "../../../images/person1.jpg";
import member2 from "../../../images/person2.jpg";
import member3 from "../../../images/person3.jpg";
import member4 from "../../../images/person4.jpg";
import SmallTitle from "../../SmallTitle/SmallTitle";
import TopSection from "../../TopSection/TopSection";
import { useLocation, useNavigate } from "react-router-dom";
import Activities from "../../Activities/Activities";
import Goals from "../../Goals/Goals";
import logo from "../../../images/logo.png";
import Structure from "../../Structure/Structure";

function EnglishAbout() {
  return (
    <div className="about text-end">
      <TopSection
        title={"Shada Association for Mountain Sports"}
        content=" The Shada Mountain Sports Association is a leading organization dedicated to promoting and developing mountain sports in the Al-Baha region. Named after the majestic Shada Mountains, the association aims to increase awareness, foster a vibrant mountain sports culture, and activate various sports activities that highlight the natural beauty and challenging terrain of Al-Baha.​ "
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 my-16">
        <div className="image">
          <img className="w-[250px]" src={logo} alt="logo" />
        </div>
        <div className="association">
          <h1 className="text-center text-[45px] text-[#a04028]">
            The idea of ​​the association's logo
          </h1>
          <p className="w-[500px] text-[20px] text-center mx-auto">
            The idea combined the visualization of the mountain and the southern
            inscription recorded in the Ministry of Culture, in addition to
            clarifying the entire topography of the region with an inscription
            indicating the letter (sh), which is the first letter of the word
            (Shada).
          </p>
        </div>
      </div>
      <Activities />
      <Goals />
      <Structure />
      <div className="members">
        <SmallTitle title={"Members of the Board of Directors"} />
        <div
          className="flex mt-[70px] flex-row-reverse justify-between items-center
        "
        >
          <div className="all-members">
            <div className="member !flex-row-reverse">
              <div className="image !w-[65px] !h-full">
                <img
                  src={member4}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p className="text-start">Nasser Muhammad Ali Al-Ghamdi</p>
                <br />
                <span className=" after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Bachelor's degree in Arabic language.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Journalist and historical researcher.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  An environmental activist, interested in organic farming, and
                  owns a coffee farm and various other things Fruit trees.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Owner of the caves tourist resort, tourist.{" "}
                </span>
              </p>
            </div>
            <div className="member !flex-row-reverse">
              <div className="image  !w-[65px] !h-full">
                <img
                  src={member3}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p className="text-start">Khaled Al-Ghamdi</p>
                <br />
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Bachelor's degree in Arabic language.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Journalist and historical researcher.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Environmental activist in organic and mountain agriculture.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Owner of the Caves Rural Tourist Resort.{" "}
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Member of several executive committees in Al Bahah region.{" "}
                </span>
              </p>
            </div>{" "}
            <div className="member !flex-row-reverse">
              <div className="image  !w-[65px] !h-full">
                <img
                  src={member2}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p className="text-start">Abdulaziz Muhammad Al-Yaqout</p>
                <br />
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Bachelor of Agricultural Sciences.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Higher leadership courses in executive management and
                  financial strategy From insidead business school.{" "}
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  18 years of experience in the private sector in Saudi Arabia
                  and the United Arab Emirates The United States and the Kingdom
                  of Bahrain.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Managing Director of Sustainable Union Trading Company.{" "}
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Chairman of the Board of Directors at AY Investment - Member
                  of the Business Office Saudi Ethiopian Executive.{" "}
                </span>
              </p>
            </div>{" "}
            <div className="member !flex-row-reverse">
              <div className="image  !w-[65px] !h-full bg-">
                {/* <img
                  src={"عزة الزهراني"}
                  alt="member"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <p>
                {" "}
                <p className="text-start">Dr. Azza Al-Zahrani</p>
                <br />
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Educational level and graduation institution: Saudi Board of
                  Dermatology / Arab Board of Dermatology and Venereology.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Professional experience: 12 years in the field of dermatology.{" "}
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  An environmental activist, interested in organic farming, and
                  owns a coffee farm and various other things Fruit trees.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Current work: Consultant doctor for dermatology and cosmetic
                  diseases.{" "}
                </span>
              </p>
            </div>
            <div className="member !flex-row-reverse">
              <div className="image  !w-[65px] !h-full">
                <img
                  src={member1}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p className="text-start">Matar Hamid Al-Omari</p>
                <br />
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Banking experience exceeding 20 years.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  {" "}
                  Member of the Board of Directors of Al-Hijaz Club.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  Membership in the Sports Investment Council in Al-Baha
                  Chamber.
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  AFC Professional Football Coach.{" "}
                </span>
                <span className="after:left-[-20px] text-start after:right-auto ml-[25px]">
                  A large number of financial and leadership courses in the
                  banking field.{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="image mt-[61px]">
            <img src={member4} alt="" />
          </div>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"Executive Team"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
      <div className="members">
        {" "}
        <SmallTitle title={"Association Members"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"Administrative Structure of the Association"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
    </div>
  );
}

export default EnglishAbout;
