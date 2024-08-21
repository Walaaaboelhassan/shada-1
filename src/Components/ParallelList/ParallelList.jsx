import React from "react";
import SmallTitle from "../SmallTitle/SmallTitle";

function ParallelList() {
  return (
    <div className="parallel-list">
      <div className="members">
        <SmallTitle title={"الموازنة المالية"} />
        <div className="not">
          <p>قيد التطوير</p>
        </div>
      </div>
    </div>
  );
}

export default ParallelList;
