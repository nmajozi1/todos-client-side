import create from 'zustand';
import { fetchTodoList, patchToDo, deleteTodo, createTodo } from './services/todos.service';

const useTodoStore = create((set) => ({
  todos: [],
  filter: 'all',
  fetchTodos: async () => {
    const response = await fetchTodoList();
    set({ todos: response.data });
  },
  patchTodo: async (id, patchData) => {
    const response = await patchToDo(id, patchData);
    set({ todos: response.data });
  },
  deleteToDo: async (id) => {
    const response = await deleteTodo(id);
    set({ todos: response.data });
  },
  create: async (todoData) => {
    const response = await createTodo(todoData);
    set({ todos: response.data });
  },
  filterTodos: async (filterVal) => {
    set({ filter: filterVal })
  }
}));

export default useTodoStore;