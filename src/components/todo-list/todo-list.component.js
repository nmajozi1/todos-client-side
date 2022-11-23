import React, { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import cross from '../../assets/path-copy.svg';
import './todo-list.style.scss';

import useTodoStore from '../../store';

const ToDoList = () => {
  const [todoList, patchTodo, deleteToDo] = useTodoStore((state) => [state.todos, state.patchTodo, state.deleteToDo]);

  const handleChange = useCallback(
    (id, status) => {
      const completeStatus = { completion: status === 0 ? true : false }
      patchTodo(id, completeStatus);
    }, [patchTodo],
  );

  const handleDelete = useCallback(
    (id) => {
      deleteToDo(id);
    }, [deleteToDo]
  )

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
      <FormGroup className="form-container">
        {checkBoxList}
      </FormGroup>
    </>
  )
}

export default ToDoList;