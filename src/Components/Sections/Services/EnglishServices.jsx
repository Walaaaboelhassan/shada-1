import React, { useContext } from "react";
import TopSection from "../../TopSection/TopSection";
import SmallTitle from "../../SmallTitle/SmallTitle";
import logo from "../../../images/logo.png";
import { motion } from "framer-motion";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function EnglishServices() {
  return (
    <div className="services pb-10">
      <TopSection
        title={"Electronic services"}
        content="We work through the online store to provide all the necessary needs for practicing mountain sports from high-quality sources and brands at the best prices"
      />
      {/* <SmallTitle title={"Online Store"} />
      <div className="products flex items-center justify-center gap-4">
        <div className="product">
          <div className="image w-[200px] h-[200px]">
            <img
              src="https://decibullz.com/cdn/shop/files/Percussive_Product.webp?v=1683754425&width=600"
              alt=""
            />
            <span className="absolute capitalize">add to cart</span>
          </div>
          <h2 className="name-product">cask</h2>
          <span className="price"></span>
          <div className="colors flex gap-3">
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
          </div>
        </div>
        <div className="product">
          <div className="image w-[200px] h-[200px]">
            <img
              src="https://decibullz.com/cdn/shop/files/Percussive_Product.webp?v=1683754425&width=600"
              alt=""
            />
            <span className="absolute capitalize">add to cart</span>
          </div>
          <h2 className="name-product">cask</h2>
          <span className="price"></span>
          <div className="colors flex gap-3">
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
          </div>
        </div>
        <div className="product">
          <div className="image w-[200px] h-[200px]">
            <img
              src="https://decibullz.com/cdn/shop/files/Percussive_Product.webp?v=1683754425&width=600"
              alt=""
            />
            <span className="absolute capitalize">add to cart</span>
          </div>
          <h2 className="name-product">cask</h2>
          <span className="price"></span>
          <div className="colors flex gap-3">
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
          </div>
        </div>
        <div className="product">
          <div className="image w-[200px] h-[200px]">
            <img
              src="https://decibullz.com/cdn/shop/files/Percussive_Product.webp?v=1683754425&width=600"
              alt=""
            />
            <span className="absolute capitalize">add to cart</span>
          </div>
          <h2 className="name-product">cask</h2>
          <span className="price"></span>
          <div className="colors flex gap-3">
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
            <span className="w-4 h-4 bg-listTitle rounded-full"></span>
          </div>
        </div>
      </div> */}
      <SmallTitle title={"Association Products​​"} />
      <div className="all-products-box flex flex-wrap justify-center items-center gap-9">
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Merchandise</h1>
          </div>
          <div className="description">
            <p>
              Branded clothing, gear, and accessories for mountain sports
              enthusiasts.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Guided Tours</h1>
          </div>
          <div className="description">
            <p>
              Professional guided tours in the Shada Mountains for groups and
              individuals.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1>Event Packages</h1>
          </div>
          <div className="description">
            <p>
              Customized event packages, including team-building activities for
              companies and school trips.​
            </p>
          </div>
        </div>
        <div className="products-box  shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> Training Programs</h1>
          </div>
          <div className="description">
            <p>Comprehensive training programs for various mountain sports.​</p>
          </div>
        </div>
      </div>
      <SmallTitle title={"Membership Tiers​ ​"} />
      <div className="membership-tiers my-10 flex flex-wrap items-center justify-center gap-6">
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">Explorer</h2>
          <p className="para">
            For beginners who have participated in at least two activities and
            attended one workshop. Includes access to basic training sessions
            and events.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">Adventurer</h2>
          <p className="para">
            For members who have participated in at least five activities and
            interacted with the association’s social media posts 50 times.
            Includes access to advanced training programs and discounts on
            merchandise.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> Mountain Climber</h2>
          <p className="para">
            For members who have participated in ten activities and interacted
            with the association’s social media posts 100 times. Includes
            exclusive access to advanced events, advanced training programs, and
            special merchandise.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> Distinguished Mountain Climber</h2>
          <p className="para">
            For members who have participated in twenty activities and
            interacted with the association’s social media posts 200 times.
            Includes all benefits of Mountain Climber plus VIP access to all
            events, personal training sessions, and exclusive merchandise.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> Lifetime Member ​</h2>
          <p className="para">
            For members who have participated in thirty activities and
            interacted with the association’s social media posts 300 times.
            One-time membership fee grants lifetime access to all association
            benefits and events, with special recognition as a primary supporter
            of the Shada Mountain Sports Association.​
          </p>
        </div>
      </div>
      <SmallTitle title={"Association Memberships"} />
      <div className="memberships flex items-center justify-center flex-wrap gap-8">
        <div className="box shadow-2xl relative ">
          <div className="name bg-[#4645D8] ">
            <h3 className="after:border-t-[#4645D8]">Regular membership ​</h3>
          </div>
          <div className="price">
            <span className="text-[#4645D8]">200</span>
          </div>
          <ul className="features">
            <li className="feature">Participation in the General Assembly</li>
            <li className="feature">
              {" "}
              Benefiting from the association's programs
            </li>
          </ul>
          <div className="subscribe">
            <button className="bg-[#4645D8]">Subscribe</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name bg-[#3C77DF]">
            <h3 className="after:border-t-[#3C77DF]">
              {" "}
              Professional membership​
            </h3>
          </div>
          <div className="price">
            <span className="text-[#3C77DF]">300 </span>
          </div>
          <ul className="features">
            <li className="feature">Participation in the General Assembly</li>
            <li className="feature">
              {" "}
              Benefiting from the association's programs
            </li>
            <li className="feature">20% discount on association activities</li>
          </ul>
          <div className="subscribe">
            <button className="bg-[#3C77DF]">Subscribe</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name bg-[#4DB2A1]">
            <h3 className="after:border-t-[#4DB2A1]">
              Distinguished membership
            </h3>
          </div>
          <div className="price">
            <span className="text-[#4DB2A1]">500 </span>
          </div>
          <ul className="features">
            <li className="feature">Participation in the General Assembly</li>
            <li className="feature">
              {" "}
              Benefiting from the association's programs
            </li>
            <li className="feature">25% discount on association activities</li>
            <li className="feature">Gifts from the association</li>
          </ul>
          <div className="subscribe">
            <button className="bg-[#4DB2A1]">Subscribe</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name bg-[#4D3D9E]">
            <h3 className="after:border-t-[#4D3D9E]">Honorary membership</h3>
          </div>
          <div className="price">
            <span className="text-[#4D3D9E] ">10,000​</span>
          </div>
          <ul className="features">
            <li className="feature">Participation in the General Assembly</li>
            <li className="feature">
              It is prohibited for supporters and groups chosen by the Board of
              Directors
            </li>
            <li className="feature">Excellent gifts from the association</li>
          </ul>
          <div className="subscribe">
            <button className="bg-[#4D3D9E]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnglishServices;
