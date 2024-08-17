import React from "react";
import SmallTitle from "../../SmallTitle/SmallTitle";
import doctor from "../../../images/doctors2.png";
import TopSection from "../../TopSection/TopSection";

function EnglishCommitment() {
  return (
    <div className="about text-end">
      <TopSection
        title={"Governance and Compliance"}
        content="Shada Mountain Sports Association is a leading organization dedicated to promoting and developing mountain sports in the Al-Baha region. Bearing the name of the majestic Shada Mountains, the association aims to raise awareness, promote a vibrant culture of mountain sports, and activate various sporting activities that highlight the natural beauty and distinctive terrain of the Al-Baha region."
      />
      <div className="members">
        <SmallTitle title={"Financial Statements"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"Financial Budget"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
      <div className="members">
        {" "}
        <SmallTitle title={"Future Plan"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
      <div className="members">
        <SmallTitle title={"Standard of Governance and Compliance"} />
        <div className="not">
          <p>Under development</p>
        </div>
      </div>
    </div>
  );
}

export default EnglishCommitment;
