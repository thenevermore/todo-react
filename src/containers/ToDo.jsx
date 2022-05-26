import React from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  return (
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default ToDo;
