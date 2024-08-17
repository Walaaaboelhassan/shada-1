import React from "react";
import SmallTitle from "../../SmallTitle/SmallTitle";
import doctor from "../../../images/doctors2.png";
import TopSection from "../../TopSection/TopSection";

function ArabicCommitment() {
  return (
    <div className="about text-end">
      <TopSection
        title={"الحوكمة و الإلتزام"}
        content="جمعية شدا للرياضات الجبلية هي منظمة رائدة مكرسة لتعزيز وتطوير الرياضات الجبلية في منطقة الباحة. تحمل اسم جبال شدا الشامخة، تهدف الجمعية إلى زيادة الوعي، وتعزيز ثقافة حيوية للرياضات الجبلية، وتفعيل الأنشطة الرياضية المختلفة التي تبرز الجمال الطبيعي والتضاريس المميزة لمنطقة الباحة"
      />
      <div className="members">
        <SmallTitle title={"القوائم المالية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"الموازنه المالية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
      <div className="members">
        {" "}
        <SmallTitle title={"الخطة المستقبلية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"معيار الحوكمة و اإللتزام"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ArabicCommitment;
