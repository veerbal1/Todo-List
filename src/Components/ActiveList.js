import React from "react";
import ListWrapper from "./ListWrapper";
import TodoListItem from "./TodoListItem";

function ActiveList() {
  return (
    <ListWrapper title="Active">
      <TodoListItem value="Learning React"/>
      <TodoListItem value="Learning Next"/>
    </ListWrapper>
  );
}

export default ActiveList;
