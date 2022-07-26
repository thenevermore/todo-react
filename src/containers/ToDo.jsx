import React from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useState } from 'react';

const ToDo = () => {
  
  const [todos, setTodos] = useState(["ngopi","sebats","mabar","boci"]);
  const handleClick = (todo) => {
    //alert(todo) 
   // myActivity.push(todo);
    //console.log(myActivity);
    //setTodos([...todos, todo]);
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos("");
    setTodos(newTodos);
  } 
  

  
  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handle={handleClick} />
      <ToDoList item={todos} />
    </div>
  );
};

export default ToDo;
