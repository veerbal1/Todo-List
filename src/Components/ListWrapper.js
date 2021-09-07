import React from "react";
import SubTitle from "./Typography/SubTitle";

function ListWrapper({ title = "", status, children }) {
  return (
    <div className="flex flex-col">
      <SubTitle
        text={title}
        status={
          title.toLowerCase() === "active"
            ? "active"
            : title.toLowerCase() === "completed" && "completed"
        }
      />
      <div className="ml-2">{children}</div>
    </div>
  );
}

export default ListWrapper;
