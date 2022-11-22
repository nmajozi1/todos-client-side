import React from 'react';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import cross from '../../assets/path-copy.svg';
import './todo-list.style.scss';

import useTodoStore from '../../store';

const ToDoList = () => {
  const [todoList, patchTodo, deleteToDo, create] = useTodoStore((state) => [state.todos, state.patchTodo, state.deleteToDo, state.create]);

  const handleChange = (id, status) => {
    const completeStatus = { completion: status === 0 ? true : false }
    patchTodo(id, completeStatus);
  }

  const handleDelete = (id) => {
    deleteToDo(id);
  }

  const handleCreateTodo = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        todo: e.target.value,
        completion: false
      }
  
      create(newTodo);
    }
  }

  const checkBoxList = todoList.map(todo => {
    return (
      <div className="check-button-container" key={todo.id}>
        <FormControlLabel control={<Checkbox 
          checked={todo.completion === 0 ? false : true}
          onChange={() => handleChange(todo.id, todo.completion)}
        />} label={ todo.todo } />
        <IconButton component="label" onClick={() => handleDelete(todo.id)}>
          <img src={cross} alt="cross" />
        </IconButton>
      </div>
    )
  });

  return (
    <>
        <h1>Todo List</h1>
            <FormControl fullWidth>
                <TextField id="standard-basic" label="Add a new todo" variant="standard" onKeyDown={handleCreateTodo}/>
            </FormControl>
            <FormGroup className="form-container">
              {checkBoxList}
            </FormGroup>
    </>
  )
}

export default ToDoList;