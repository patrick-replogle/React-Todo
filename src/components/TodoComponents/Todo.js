import React from "react";

class Todo extends React.Component {
  render() {
    let toggleClass = "todo";
    if (this.props.todo.completed) {
      toggleClass = toggleClass + " completed";
    }

    const handleClick = () => {
      this.props.toggleCompleted(this.props.todo.id);
    };

    return (
      // <div className={`todo${props.todo.completed ? "completed" : ""}`}>
      <div className={toggleClass} onClick={handleClick}>
        <p>{this.props.todo.name}</p>
      </div>
    );
  }
}

export default Todo;
