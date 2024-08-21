import React, { useContext } from "react";
import TopSection from "../../TopSection/TopSection";
import SmallTitle from "../../SmallTitle/SmallTitle";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Outlet } from "react-router-dom";
import mount from "../../../images/5881775159038296685.jpg";

function ArabicServices() {
  return (
    <div className="services pb-10">
      <TopSection
        title={"الخدمات الإلكترونية"}
        content="نعمل من خلال المتجر الإلكتروني لتوفير جميع الاحتياجات اللازمة لممارسة الرياضات الجبلية من مصادر و ماركات عالية الجودة و بأفضل الأسعار"
      />
      <div className="join-us min-h-[100vh] flex justify-center items-center gap-4 ">
        <div className="image">
          <img src={mount} alt="mount" />
        </div>
        <div className="cover border-[12px] absolute"></div>
        <div className="info">
          <div className="title">
            <h1>انضم لنا</h1>
          </div>
          <div className="paragraph">
            <p>
              كن جزءًا من جمعية شدا للرياضات الجبلية وابدأ رحلة مغامرة عبر
              المناظر الطبيعية الخلابة لمنطقة الباحة. سواء كنت مبتدئًا تتطلع
              للاستكشاف أو متسلق جبال متمرس، فإن مجتمعنا يرحب بك لتجربة إثارة
              وجمال الرياضات الجبلية
            </p>
          </div>
        </div>
      </div>
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
      <Outlet />
    </div>
  );
}

export default ArabicServices;
