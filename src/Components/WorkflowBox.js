import React from "react";
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
      className="w-8/12 h-4/6 rounded-md grid p-3"
      style={styles.workflowBox}
    >
      <Title title="Todo List" className="text-xl" />
    </div>
  );
}

export default WorkflowBox;
