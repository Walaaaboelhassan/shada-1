import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";

function Memberships() {
  return (
    <div className="memberships">
      <SmallTitle title={"عضويات الجمعية"} />
      <div className="memberships flex items-center justify-center flex-wrap gap-8 gap-y-[170px]">
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

export default Memberships;
