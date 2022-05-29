import React from 'react';

const ToDoList = ({todos}) => {
  return (
    <div className='todo-list'>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
