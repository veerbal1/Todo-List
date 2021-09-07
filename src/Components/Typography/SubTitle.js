import React from "react";
import ActiveSignal from "../ActiveSignal";

function SubTitle({ text, status }) {
  return (
    <div className="flex items-center">
      <h4 className="font-normal text-base select-none">{text}</h4>
      <ActiveSignal status={status} />
    </div>
  );
}

export default SubTitle;
