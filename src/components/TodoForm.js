import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodos } from '../app/todoSlice';

export default function TodoForm(props) {
  const [todoItem, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    dispatch(addTodo({ name: todoItem, done: false }));
  }

  return (
    <div>
      <input
        type='text'
        onChange={handleChange} />
      <button
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}
