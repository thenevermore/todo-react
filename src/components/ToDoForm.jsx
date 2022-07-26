import React from 'react';
import { useState } from 'react';

const ToDoForm = ({handle}) => {
  const [todo, setTodo] = useState("");
  
  const submitHandler = (todo) => {
    handle(todo);
    setTodo("");
  }
  const handleKeyPress = e => {
    e.preventDefault();
    if (e.keyCode === 13) {      
      submitHandler(e.target.value);
    }
  };

  return (
    <div className='todo-form'>      
      <form onSubmit={handleKeyPress}>
      <p>~ Today I need to ~</p>
      <span>
        <input value={todo} onChange={(e) => { setTodo(e.target.value) }} />
        <button onClick={() => submitHandler(todo)}>Submit</button>
      </span>
      <p>{ todo }</p>
      </form>
    </div>
  );
};

export default ToDoForm;
