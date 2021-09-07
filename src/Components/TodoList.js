import React from "react";
import ActiveList from "./ActiveList";

const styles = {
  listParentWrapper:{
    maxWidth:"40%"
  }
}

const todoList = [
  {
    id: "1",
    task: "Learn Reactjs. It is avery good framework to build complex UIs",
    completed: false,
  },
  {
    id: "2",
    task: "Learn Nextjs",
    completed: false,
  },
  {
    id: "3",
    task: "Learn Javascript",
    completed: false,
  },
];

function TodoList() {
  return (
    <div className="ml-4" style={styles.listParentWrapper}>
      <ActiveList items={todoList}/>
    </div>
  );
}

export default TodoList;
