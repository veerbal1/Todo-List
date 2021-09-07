import React from "react";
import AddButton from "./AddButton";
import Title from "./Typography/Title";

const styles = {
  workflowBox: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function WorkflowBox() {
  return (
    <div
      className="w-8/12 h-4/6 rounded-md p-3"
      style={styles.workflowBox}
    >
      <div className="flex items-center">
        <Title title="Todo List" className="text-xl" />
        <AddButton/>
      </div>
    </div>
  );
}

export default WorkflowBox;
