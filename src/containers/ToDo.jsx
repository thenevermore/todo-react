import React, { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    const newTodo = { id: todos.length, task: todo, complete: false };
    setTodos([...todos, newTodo]);
  };

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
    </div>
  );
};

export default ToDo;
