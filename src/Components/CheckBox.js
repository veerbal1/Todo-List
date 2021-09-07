import React from "react";

const styles = {
  //   checkBox: {
  //     // border,
  //   },
  container: {
    cursor: "pointer",
    display: "block",
  },
  input: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    height: 0,
    width: 0,
  },
};

function CheckBox() {
  return <input type="checkbox" className="pr-2"/>;
}

export default CheckBox;
