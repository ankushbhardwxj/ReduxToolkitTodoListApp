import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ name: "Wash", done: false }];
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) =>
      state.push({ name: action.payload, done: false }),
    toggleTodo: (state, action) => {
      state[action.payload.idx].done = !state[action.payload.idx].done;
    },
    deleteTodo: (state, action) => {

    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export const getTodos = state => state.todos;
export default todoSlice.reducer;


