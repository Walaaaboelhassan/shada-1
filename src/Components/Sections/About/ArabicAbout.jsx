import React, { useEffect } from "react";
import "./About.css";
import logo from "../../../images/logo.png";
import member1 from "../../../images/person1.jpg";
import member2 from "../../../images/person2.jpg";
import member3 from "../../../images/person3.jpg";
import member4 from "../../../images/person4.jpg";
import SmallTitle from "../../SmallTitle/SmallTitle";
import TopSection from "../../TopSection/TopSection";
import { useLocation, useNavigate } from "react-router-dom";
import Activities from "../../Activities/Activities";
import Goals from "../../Goals/Goals";
import Structure from "../../Structure/Structure";

function ArabicAbout() {
  return (
    <div className="about text-end">
      <TopSection
        title={"جمعية شدا للرياضيات الجبلية​"}
        content="جمعية شدا للرياضات الجبلية هي منظمة رائدة مكرسة لتعزيز وتطوير الرياضات الجبلية في منطقة الباحة. تحمل اسم جبال شدا الشامخة، تهدف الجمعية إلى زيادة الوعي، وتعزيز ثقافة حيوية للرياضات الجبلية، وتفعيل الأنشطة الرياضية المختلفة التي تبرز الجمال الطبيعي والتضاريس المميزة لمنطقة الباحة"
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 my-16">
        <div className="image">
          <img className="w-[250px]" src={logo} alt="logo" />
        </div>
        <div className="association">
          <h1 className="text-center text-[45px] text-[#a04028]">
            فكرة شعار الجمعية​
          </h1>
          <p className="w-[500px] text-[20px]">
            جمعت الفكرة بين تصور الجبل و النقش الجنوبي المسجل في وزارة الثقافه
            بالإضافه الى توضيح تضاريس المنطقة بالكامل مع نقش يدل على حرف ( ش )
            وهو أول حرف من كلمة ( شدا ) ​
          </p>
        </div>
      </div>
      <Activities />
      <Goals />
      <Structure />
      <div className="members">
        <SmallTitle title={"أعضاء المجلس الإدارة"} />
        <div className="flex mt-[70px] justify-between items-center flex-row-reverse">
          <div className="all-members">
            <div className="member flex-row-reverse">
              <div className="image !w-[65px] !h-full">
                <img
                  src={member4}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> ناصر محمد علي الغامدي</p>
                <br />
                <span>بكلوريوس لغة عربية</span>
                <span>كاتب صحفي وباحث تاريخي</span>
                <span>
                  ناشط بيئي ومهتم بالزراعة العضوية وأمتلك مزرعة للقهوة ومختلف
                  اشجار الفاكهة
                </span>
                <span>مالك منتجع الكهوف السياحي سياحي </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[65px] !h-full">
                <img
                  src={member3}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> خالد الغامدي</p>
                <br />
                <span>بكلوريوس لغة عربية</span>
                <span>كاتب صحفي وباحث تاريخي</span>
                <span>ناشط بيئي في الزراعه العضوية و الجبليه</span>
                <span>مالك منتجع الكهوف السياحي الريفي </span>
                <span>عضو عدة لجان تنفيذيه في منطقة الباحه </span>
              </p>
            </div>{" "}
            <div className="member flex-row-reverse">
              <div className="image !w-[65px] !h-full">
                <img
                  src={member2}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> عبدالعزيز محمد الياقوت</p>
                <br />
                <span>بكالوريوس علوم زراعية</span>
                <span>
                  {" "}
                  دورات قياديه عليا في الاداره التنفيذيه و الاستراتيجية المالية
                  من insead business school{" "}
                </span>
                <span>
                  خبره 18 عام في القطاع الخاص في السعودية و الامارات العربية
                  المتحده و مملكة البحرين
                </span>
                <span>عضو منتدب في شركة الاتحاد المستدام للتجاره </span>
                <span>
                  {" "}
                  رئيس مجلس الإداره في AY investment - عضو المكتب الأعمال
                  التنفيذي السعودي الأثيوبي{" "}
                </span>
              </p>
            </div>{" "}
            <div className="member flex-row-reverse">
              <div className="image !w-[65px] !h-full bg-">
                {/* <img
                  src={"عزة الزهراني"}
                  alt="member"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <p>
                {" "}
                <p> الدكتوره / عزة الزهراني</p>
                <br />
                <span>
                  {" "}
                  المستوى التعليمي و جهه التخرج : البورد السعودي لامراض الجلدية
                  / البورد العربي للامراض الجلدية والتناسلية
                </span>
                <span>
                  {" "}
                  الخبره المهنيه : ١٢ سنة في مجال تخصص الامراض الجلدية{" "}
                </span>
                <span>
                  ناشط بيئي ومهتم بالزراعة العضوية وأمتلك مزرعة للقهوة ومختلف
                  اشجار الفاكهة
                </span>
                <span>
                  العمل الحالي : طبيبة استشارية للامراض الجلدية والتجميل{" "}
                </span>
              </p>
            </div>
            <div className="member flex-row-reverse">
              <div className="image !w-[65px] !h-full">
                <img
                  src={member1}
                  alt="member"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                {" "}
                <p> مطر حامد العمري</p>
                <br />
                <span> خبرة مصرفيه تتجاوز ٢٠ عام</span>
                <span> عضو مجلس ادارة نادي الحجاز</span>
                <span>عضوية مجلس الاستثمار الرياضي بغرفه الباحه</span>
                <span>مدرب كرة قدم محترف من الاتحاد الآسيوي </span>
                <span>
                  عدد كبير من الدورات الماليه و القياديه في المجال المصرفي{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="image">
            <img src={member4} alt="" />
          </div>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"الفريق التنفيذي"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
      <div className="members">
        {" "}
        <SmallTitle title={"أعضاء الجمعية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"الهيكل الإداري للجمعية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicAbout;
