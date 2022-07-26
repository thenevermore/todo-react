import React from 'react';

const ToDoList = ({item}) => {
  
  return (
    <div className='todo-list'>
      <ul>
        {
          item.map((aktivitas) => {
            return <li key={aktivitas}>{`hari ini ${aktivitas}`}</li>
          })
        }
      </ul>
    </div>
  );
};

export default ToDoList;
