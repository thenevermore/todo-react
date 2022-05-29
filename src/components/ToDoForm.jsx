import React, { useState } from 'react';

const ToDoForm = () => {
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
        <button>Submit</button>
      </span>
    </div>
  );
};

export default ToDoForm;
