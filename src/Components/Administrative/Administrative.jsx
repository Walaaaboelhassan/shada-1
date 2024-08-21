import React from "react";
import "./Administrative.css";
import "../Sections/About/About.css";
import SmallTitle from "../SmallTitle/SmallTitle";

function Administrative() {
  return (
    <div className="administrative">
      <div className="members">
        <SmallTitle title={"الهيكل الإداري للجمعية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default Administrative;
