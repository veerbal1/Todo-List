import React, { useState } from "react";
import { getAll } from "../Services/toDoList";
import AddButton from "./AddButton";
import AddNew from "./AddNew";
import TodoList from "./TodoList";
import Title from "./Typography/Title";

const styles = {
  workflowBox: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};

function WorkflowBox() {
  const [todo, setToDo] = useState(getAll());

  const addNew = (data = {}) => {
    setToDo([...todo, data]);
  };
  return (
    <div className="w-8/12 h-4/6 rounded-md p-3" style={styles.workflowBox}>
      <div className="flex justify-start flex-col">
        <Title title="Todo List" className="text-xl" />
        <AddNew addNew={addNew} todo={todo}/>
        {/* <AddButton /> */}
      </div>
      <div className="flex my-2">
        <TodoList items={todo}/>
      </div>
    </div>
  );
}

export default WorkflowBox;
