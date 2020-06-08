import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import Todo from "./Todo";

const TodoList = props => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect(() => {}, [filteredTodos, searchTerm]);

  // const handleChange = event => {
  //   setSearchTerm(event.target.value);
  //   setFilteredTodos(
  //     props.todos.filter(todo =>
  //       todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   console.log(searchTerm);
  // };

  // const myArray = filteredTodos.length ? filteredTodos : props.todos;

  return (
    <div className="todo-list">
      {props.todos.length < 1 && <h2>Add a Todo!</h2>}
      {props.todos.map(item => {
        return (
          <Todo
            key={item.id}
            todo={item}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
      {/* <Search handleChange={handleChange} searchTerm={searchTerm} /> */}
    </div>
  );
};

export default TodoList;
