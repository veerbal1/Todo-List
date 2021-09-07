import React from "react";

function ActiveSignal({ status = null }) {
  return (
    <div
      className={`select-none w-2 h-2 ${
        status == null
          ? "bg-transparent"
          : status === "active"
          ? "bg-green-400"
          : status === "completed" && "bg-gray-300"
      } rounded-full ml-1`}
    >
      &nbsp;
    </div>
  );
}

export default ActiveSignal;
