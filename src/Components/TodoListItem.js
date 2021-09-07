import React from "react";
import CheckBox from "./CheckBox";

const styles = {
  glassEffect: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function TodoListItem({ value, completed }) {
  return (
    <div
      className={`text-sm font-extralight flex justify-start items-center px-2 py-1 select-none cursor-pointer my-1 rounded-sm ${completed && "disabled:opacity-50 line-through"}`}
      style={styles.glassEffect}
    >
      <span className="pr-2">
        <CheckBox checked={completed} />
      </span>
      {value}
    </div>
  );
}

export default TodoListItem;
