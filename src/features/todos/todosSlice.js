import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialstate: [],
  reducers: {
    addTodo(state, action) {
      const {id, text} = action.payload;
      state.push({id, text, completed: false});
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.compeleted = !todo.completed;
      }
    },
  },
});

export const {addTodo, toggleTodo} = todoSlice.actions;

export default todosSlice.reducer;
