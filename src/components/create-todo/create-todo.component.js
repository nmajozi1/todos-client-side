import React, { useCallback, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import useTodoStore from '../../store';

const CreateToDo = () => {
const create = useTodoStore((state) => state.create);
const [newToDoText, setNewTodo] = useState('');

  const handleCreateTodo = useCallback(
    (e) => {
        if (e.key === 'Enter') {
            const newTodo = {
            todo: e.target.value,
            completion: false
            }
        
            create(newTodo);
            setNewTodo('');
        }
    },
    [create],
  );

  return (
    <FormControl fullWidth>
        <TextField label="Add a new todo" variant="standard" value={newToDoText} onKeyDown={handleCreateTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
    </FormControl>
  )
}

export default CreateToDo;