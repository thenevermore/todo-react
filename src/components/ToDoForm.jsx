import React, { useState } from 'react';

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState("");

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleClick(todo);
            setTodo("");
          }}
        >
          Submit
        </button>
      </span>
    </div>
  );
};

export default ToDoForm;
