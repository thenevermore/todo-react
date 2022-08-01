import React from 'react';
import { List, ListItem, ListItemButton, Checkbox, ListItemText, ListItemIcon } from '@mui/material';

const ToDoList = ({item, handleCheckbox}) => {
  
  
  return (
    <div className='todo-list'>
      <List>
        {
          item.map((aktivitas, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <Checkbox onChange={() => { handleCheckbox(aktivitas.id) }} checked={aktivitas.complete} />
                  </ListItemIcon>
                  <ListItemText className={ aktivitas.complete && "complete" }>{aktivitas.task}</ListItemText>
                  {/* pengecekan dengan ternary >> aktivitas.complete ? "complete" : "" <<  */}
                </ListItemButton>                    
              </ListItem>)
          })
        }
      </List>
    </div>
  );
};

export default ToDoList;
