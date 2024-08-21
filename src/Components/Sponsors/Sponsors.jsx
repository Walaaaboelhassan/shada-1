import React from "react";
import "./Sponsors.css";
import SmallTitle from "../SmallTitle/SmallTitle";
import FD from "../../images/فضي.png";
import gold from "../../images/ذهبي.png";
import platinium from "../../images/بلاتينيوم.png";
import bronzy from "../..//images/برونزي.png";
import normal from "../../images/logo.png";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";

function Sponsors() {
  return (
    <div className="sponsors">
      <SmallTitle title={"الرعاة  ​"} />
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
      <div className="membership-tiers my-10 flex flex-wrap items-center justify-center gap-6">
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">مستكشف</h2>
          <p className="para">
            الذين شاركوا في نشاطين على الأقل وحضروا ورشة عمل واحدة. يشمل الوصول
            إلى جلسات التدريب الأساسية والفعاليات.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title">مغامر</h2>
          <p className="para">
            للأعضاء الذين شاركوا في خمسة أنشطة على الأقل وتفاعلوا مع منشورات
            الجمعية على وسائل التواصل الاجتماعي 50 مرة. يشمل الوصول إلى برامج
            التدريب المتقدمة وخصومات على البضائع.
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> متسلق جبال</h2>
          <p className="para">
            الذين شاركوا في عشرة أنشطة وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 100 مرة. يشمل الوصول الحصري إلى الفعاليات
            المتقدمة، برامج التدريب المتقدمة، والبضائع الخاصة.
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> متسلق جبال مميز</h2>
          <p className="para">
            الذين شاركوا في عشرين نشاطًا وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 200 مرة. يشمل جميع مزايا متسلق الجبال بالإضافة إلى
            وصول VIP لجميع الفعاليات، جلسات تدريب شخصية، وبضائع حصرية.​
          </p>
        </div>
        <div className="membership">
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          <h2 className="title"> عضو مدى الحياة ​</h2>
          <p className="para">
            الذين شاركوا في ثلاثين نشاطًا وتفاعلوا مع منشورات الجمعية على وسائل
            التواصل الاجتماعي 300 مرة. رسوم عضوية لمرة واحدة تمنح وصولًا مدى
            الحياة لجميع فوائد وفعاليات الجمعية، مع تكريم خاص كداعم رئيسي لجمعية
            شدا للرياضات الجبلية.​
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
