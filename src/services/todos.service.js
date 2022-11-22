import axios from 'axios';
import config from '../config/config.json';

const fetchTodoList =  async () => {
  const res = await axios.get(`${config.baseUrl}`); 

  return res;
}

const patchToDo = async (id, patchData) => {
  const res = await axios.patch(`${config.baseUrl}/${id}`, patchData);

  return res;
}

const deleteTodo = async (id) => {
  const res = await axios.delete(`${config.baseUrl}/${id}`);

  return res;
}

const createTodo = async (todo) => {
  const res = await axios.post(`${config.baseUrl}`, todo);

  return res;
}

export {
  fetchTodoList,
  patchToDo,
  deleteTodo,
  createTodo
};