import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import logo from "./img/todo.jpg";
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

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  };

  componentDidMount() {
    const todo = window.localStorage.getItem("todo") === "true";
    this.setState({ todo });
  }

  render() {
    return (
      <div className="App">
        <div className="form-container">
          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearcompleted}
          />
          <button onClick={this.clearCompleted}>Clear Completed Todo's</button>
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
