import React from "react";

const styles = {
  glassEffect: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function TodoListItem({ value }) {
  return (
    <div
      className="text-sm 
                font-extralight 
                flex 
                justify-start 
                items-center 
                px-2 
                py-1 
                select-none 
                cursor-pointer
                my-1
                "
      style={styles.glassEffect}
    >
      {value}
    </div>
  );
}

export default TodoListItem;
