import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useTodoStore from '../../store';
import CardActions from '@mui/material/CardActions';
import correct from '../../assets/group.svg';

import './todo.style.scss';
import ToDoList from '../todo-list/todo-list.component';
import CreateToDo from '../create-todo/create-todo.component';
const Todos = () => {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="card-wrapper">
        <Card className="todo-card">
          <CardContent>
            <div>
              <img src={correct} alt="correct" />
            </div>
            <h1>Todo List</h1>
            <CreateToDo />
            <ToDoList />
          </CardContent>
          <CardActions>
            <label className="footer-label">Show: </label>
            <ul>
              <li><a>All</a></li>
              <li><a>Completed</a></li>
              <li><a>Incompleted</a></li>
            </ul>
          </CardActions>
        </Card>
    </div>
  )
}

export default Todos;