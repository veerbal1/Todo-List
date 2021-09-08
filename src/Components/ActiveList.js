import React from "react";
import ListWrapper from "./ListWrapper";
import TodoListItem from "./TodoListItem";

function ActiveList({ items,addNew }) {
  return (
    <ListWrapper title="Active" addNew={addNew}>
      {items.map((item) => (
        <TodoListItem key={item.id} value={item.task} completed={item.completed}/>
      ))}
    </ListWrapper>
  );
}

export default ActiveList;
