import React, { useContext } from "react";
import TopSection from "../../TopSection/TopSection";
import SmallTitle from "../../SmallTitle/SmallTitle";
import logo from "../../../images/logo.png";
import { motion } from "framer-motion";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function ArabicServices() {
  return (
    <div className="services pb-10">
      <TopSection
        title={"الخدمات اإللكترونية"}
        content="نعمل من خلال المتجر الإلكتروني لتوفير جميع الاحتياجات اللازمة لممارسة الرياضات الجبلية من مصادر و ماركات عالية الجودة و بأفضل الأسعار"
      />
      {/* <SmallTitle title={"المتجر الإلكتروني"} />
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
      <SmallTitle title={"منتجات الجمعية​ ​"} />
      <div className="all-products-box flex flex-wrap justify-center items-center gap-9">
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> البضائع</h1>
          </div>
          <div className="description">
            <p>
              ملابس وأدوات وإكسسوارات تحمل العلامة التجارية للجمعية لعشاق
              الرياضات الجبلية
            </p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> الجولات الإرشادية</h1>
          </div>
          <div className="description">
            <p>جولات إرشادية احترافية في جبال شدا للمجموعات والأفرا</p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1>برامج التدريب</h1>
          </div>
          <div className="description">
            <p>برامج تدريبية شاملة لمختلف الرياضات الجبلية</p>
          </div>
        </div>
        <div className="products-box text-end shadow-lg ">
          <div className="icon">
            <MdOutlineProductionQuantityLimits />
          </div>
          <div className="title">
            <h1> حزم الفعاليات</h1>
          </div>
          <div className="description">
            <p>
              حزم مخصصة للفعاليات، بما في ذلك أنشطة بناء الفرق للشركات ورحلات
              المدارس
            </p>
          </div>
        </div>
      </div>
      <SmallTitle title={"الرعاة والداعمين ​"} />
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
      <SmallTitle title={"عضويات الجمعية"} />
      <div className="memberships flex items-center justify-center flex-wrap gap-8">
        <div className="box shadow-2xl relative ">
          <div className="name  ">
            <h3 className="">عضوية عادية ​</h3>
          </div>
          <div className="price">
            <span className="">200</span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​</li>
            <li className="feature"> الاستفادة من برامج الجمعية​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className=""> عضوية محترف​</h3>
          </div>
          <div className="price">
            <span className="">300 </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​ </li>
            <li className="feature"> الإستفادة من برامج الجمعية​ </li>
            <li className="feature"> خصم على فعاليات الجمعية 20%​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className="">عضوية مميزة​</h3>
          </div>
          <div className="price">
            <span className="">500 </span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة بالجمعية العمومية​ </li>
            <li className="feature"> الإستفادة من برامج الجمعية​ </li>
            <li className="feature"> خصم على فعاليات الجمعية 25%​ </li>
            <li className="feature"> هدايا من الجمعية​ </li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
        <div className="box shadow-2xl relative ">
          <div className="name ">
            <h3 className="">عضوية فخرية ( بشروط و قيود ) ​ ​</h3>
          </div>
          <div className="price">
            <span className="">10.000​</span>
          </div>
          <ul className="features">
            <li className="feature">المشاركة في الجمعية العامة​</li>
            <li className="feature">
              تمنع للداعمين و الفئات التي يختارها مجلس الإدارة
            </li>
            <li className="feature"> هدايا راقيه من الجمعية​</li>
          </ul>
          <div className="subscribe">
            <button className="">اشترك</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicServices;
