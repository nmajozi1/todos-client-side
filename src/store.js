import create from 'zustand';
import { fetchTodoList, patchToDo, deleteTodo, createTodo } from './services/todos.service';

const useTodoStore = create((set) => ({
  todos: [],
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
  }
}));

export default useTodoStore;