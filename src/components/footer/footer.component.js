import React, { useCallback } from 'react';
import Button from '@mui/material/Button';
import useTodoStore from '../../store';

const Footer = () => {
  const [filterTodos] = useTodoStore((state) => [state.filterTodos]);

  const FilterByCompletion = useCallback((value) => {
    filterTodos(value);
  }, [filterTodos]);

  return (
    <>
        <label className="footer-label">Show: </label>
        <Button variant="text" onClick={()=>FilterByCompletion('all')}>All</Button>
        <Button variant="text" onClick={()=>FilterByCompletion('complete')}>Completed</Button>
        <Button variant="text" onClick={()=>FilterByCompletion('incomplete')}>Incompleted</Button>
    </>
  )
}

export default Footer;