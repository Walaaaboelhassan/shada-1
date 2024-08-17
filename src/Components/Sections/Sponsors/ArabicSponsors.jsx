import React from "react";
import "./Sponsors.css";
import TopSection from "../../TopSection/TopSection";
import { GoSponsorTiers } from "react-icons/go";
import SmallTitle from "../../SmallTitle/SmallTitle";
import Groups from "../../Groups/Groups";
import FD from "../../../images/فضي.png";
import gold from "../../../images/ذهبي.png";
import platinium from "../../../images/بلاتينيوم.png";
import bronzy from "../../../images/برونزي.png";
import normal from "../../../images/logo.png";

function ArabicSponsors() {
  return (
    <div className="sponsors">
      <TopSection
        title="الجهات الداعمة و الراعية"
        content="تم تصميم برنامج الرعاية والدعم لدعم مناشط الجمعية بعدة فئات تتناسب مع جميع المهتمين بحيث يحقق المكاسب النوعية للراعي و أيضاً يساعد الجمعية على القيام بواجبها المجتمعي و الأنشطة التي تعزز من نشاطها​"
      />

      <SmallTitle title="الرعاة والداعمين ​" />
      <div className="all-sponsors-box flex flex-wrap justify-center items-center gap-9">
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={normal} alt="normal" />
          </div>
          <div className="title">
            <h1> رعاية عادية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={bronzy} alt="bronzy" />
          </div>
          <div className="title">
            <h1> رعاية برونزية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={FD} alt="bronzy" />
          </div>
          <div className="title">
            <h1>رعاية فضية​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={gold} alt="bronzy" />
          </div>
          <div className="title">
            <h1> رعاية ذهبية</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
        <div className="sponsors-box text-end shadow-lg ">
          <div className="icon">
            <img className="w-[92px]" src={platinium} alt="bronzy" />
          </div>
          <div className="title">
            <h1>رعاية بلاتينية ​</h1>
          </div>
          <div className="description">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti recusandae dicta, aspernatur consequatur eum.
            </p> */}
          </div>
        </div>
      </div>
      <Groups />
    </div>
  );
}

export default ArabicSponsors;
