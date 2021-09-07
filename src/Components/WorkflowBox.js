import React from "react";

const styles = {
  workflowBox: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function WorkflowBox() {
  return (
    <div className="w-8/12 h-4/6 rounded-md" style={styles.workflowBox}></div>
  );
}

export default WorkflowBox;
