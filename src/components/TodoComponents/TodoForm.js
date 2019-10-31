import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  handleChange = e => {
    this.setState({
      todoName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.props.addTodo(this.state.todoName);
    }
    this.setState({
      todoName: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="todo"
            value={this.state.todoName}
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
