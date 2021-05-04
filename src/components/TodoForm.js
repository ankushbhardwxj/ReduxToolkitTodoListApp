import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodos } from '../app/todoSlice';
import styles from '../features/counter/Counter.module.css';

export default function TodoForm(props) {
  const [todoItem, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    dispatch(addTodo({ name: todoItem, done: false }));
    setTodo('');
  }

  return (
    <div>
      <input
        type='text'
        className={styles.textbox2}
        value={todoItem}
        placeholder='Add a todo'
        onChange={handleChange} />
      <button
        className={styles.button}
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}
