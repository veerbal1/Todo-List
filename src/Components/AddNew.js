import React, { useState } from "react";
import AddButton from "./AddButton";

const styles = {
  main: {
    maxWidth: "42%",
  },
  inputBox: {
    flex: 1,
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function AddNew({ addNew, todo }) {
  const [newTask, setNewTask] = useState("");

  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      addNew({
        id: todo.length + 1,
        task: newTask,
        completed: false,
      });
      setNewTask("");
    }
  };

  const handleClick = (data) => {
    addNew({
      id: todo.length + 1,
      task: newTask,
      completed: false,
    });
    setNewTask("");
  };

  return (
    <div
      style={styles.main}
      className="flex bg-transparent justify-center items-center"
    >
      <input
        type="text"
        style={styles.inputBox}
        className={`font-thin outline-none rounded px-2`}
        placeholder="Add new"
        onChange={(e) => setNewTask(e.target.value)}
        onKeyUp={handlekeyPress}
        value={newTask}
      />
      <AddButton handleClick={handleClick} />
    </div>
  );
}

export default AddNew;
