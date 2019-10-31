import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  toggleCompleted = itemId => {
    console.log("toggleCompleted ", itemId);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  addTodo = todoName => {
    console.log("add todo: ", todoName);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
