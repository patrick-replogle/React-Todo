// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.length < 1 && <p>Add a Todo!</p>}
      {props.todos.map(item => {
        return (
          <Todo
            key={item.id}
            todo={item}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
