import React, { useCallback } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import useTodoStore from '../../store';

const CreateToDo = () => {
const create = useTodoStore((state) => state.create)

  const handleCreateTodo = useCallback(
    (e) => {
        if (e.key === 'Enter') {
            const newTodo = {
            todo: e.target.value,
            completion: false
            }
        
            create(newTodo);
        }
    },
    [create],
  );

  return (
    <FormControl fullWidth>
        <TextField id="standard-basic" label="Add a new todo" variant="standard" onKeyDown={handleCreateTodo}/>
    </FormControl>
  )
}

export default CreateToDo;