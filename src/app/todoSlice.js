import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [
      { name: "learn redux", done: false }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        name: action.payload.name,
        done: false
      })
    },
    toggleTodo: (state, action) => {
      state.value[action.payload].done = !state.value[action.payload].done;
    },
    deleteTodo: (state, action) => {
      const idx = state.value.findIndex(item => item.name === action.payload);
      console.log(idx);
      state.value.splice(idx, 1);
    }
  }
});

export const getTodos = state => {
  return state.todos;
}
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


