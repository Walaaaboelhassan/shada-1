import React from "react";
import mount from "../../../images/5881775159038296685.jpg";
import Icons from "../../socialMedia/socialMediaLinks";
import { motion } from "framer-motion";
import SmallTitle from "../../SmallTitle/SmallTitle";

function ArabicJoin() {
  return (
    <div className="">
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
      <div className="contact-us ">
        <div className="info">
          <SmallTitle title="تواصل معنا​" />
          <div className="paragraph">
            <p>
              لمزيد من المعلومات، تفاصيل العضوية، أو فرص الرعاية، يرجى التواصل
              معنا عبر موقعنا الإلكتروني أو قنوات التواصل الاجتماعي. لنصل إلى
              آفاق جديدة معًا مع جمعية شدا للرياضات الجبلية.
            </p>
          </div>
        </div>
        <div className="contact-form-info">
          <form className="form">
            <input
              type="text"
              id="username"
              placeholder="الإسم"
              className="text-end"
            />
            <input
              type="email"
              id="email"
              placeholder="الإيميل"
              className="text-end"
            />
            <textarea
              name="message"
              placeholder="الرسالة"
              className="text-end"
            ></textarea>
            <input type="submit" value="إبعث" />
          </form>
          <div className="contact-side-info">
            <div className="back"></div>
            <div className="title">
              <h1>تواصل معنا لأي معلومة</h1>
            </div>
            <div className="contact-me">
              <h4>الموقع</h4>
              <address>المملكة العربية السعودية – الباحة</address>
            </div>
            <div className="contact-me">
              <h4>الهاتف && الإيميل</h4>
              <address className="text-center">
                SHADAMOUNTAINSPORTS@GMAIL.COM <br />
                <strong className="">&&</strong>
                <br /> 0551471042
              </address>
            </div>
            <div className="contact-me">
              <h4>تابعنا على </h4>
              <div className="icons">
                <Icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArabicJoin;
