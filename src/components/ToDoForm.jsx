import { TextField, Button } from '@mui/material';
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
        <TextField label="Aktifitas" variant="outlined" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
        <Button variant="contained" onClick={() => submitHandler(todo)}>Submit</Button>
      </span>
      </form>
    </div>
  );
};

export default ToDoForm;
