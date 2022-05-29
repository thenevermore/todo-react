import React, { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    // state is immutable, you need to replace the whole array
    // ...todos is the spread operator, it spreads the array
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDo;
