import React from 'react';
import { Button } from '@mui/material';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useState } from 'react';

const ToDo = () => {
  
  const [todos, setTodos] = useState([
  ]);
  const handleClick = (todo) => {
    //alert(todo) 
   // myActivity.push(todo);
    //console.log(myActivity);
    //setTodos([...todos, todo]);
    /* const newTodos = [...todos];
    newTodos.push(todo);
    setTodos("");
    setTodos(newTodos); */
    let newId = 0;
    if (todos.length===0){
      newId = 0;  
    } else {
      newId = todos.length + 1;
    }

    const newTodos = { id: newId, task: todo, complete: false }
    setTodos([...todos, newTodos]);
  } 

  const handleCheckbox = (id) =>{
    //alert(`Checkbox ${id}`);
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  
  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handle={handleClick} />
      <ToDoList item={todos} handleCheckbox={handleCheckbox} />
      <Button color="error" variant="outlined" onClick={handleDelete }>Hapus Aktivitas</Button>
    </div>
  );
};

export default ToDo;
