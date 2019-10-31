import React from "react";

// const Item = props => {
//   let verboseClassName = "item";
//   if (props.item.purchased) {
//     verboseClassName = verboseClassName + " purchased";
//   }

//   const handleClick = () => {
//     props.togglePurchased(props.item.id);
//   };

const Todo = props => {
  let toggleClass = "todo";
  if (props.todo.completed) {
    toggleClass = toggleClass + " completed";
  }

  const handleClick = () => {
    props.toggleCompleted(props.todo.id);
  };

  return (
    // <div className={`todo${props.todo.completed ? "completed" : ""}`}>
    <div className={toggleClass} onClick={handleClick}>
      <p>{props.todo.name}</p>
    </div>
  );
};

export default Todo;
