import React, { useState } from "react";
import { getAll, list } from "../Services/toDoList";
import ActiveList from "./ActiveList";

const styles = {
  listParentWrapper: {
    maxWidth: "40%",
  },
};

function TodoList({items,addNew}) {
  return (
    <div className="ml-4" style={styles.listParentWrapper}>
      <ActiveList items={items} addNew={addNew}/>
    </div>
  );
}

export default TodoList;
