import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos, deleteTodo, toggleTodo } from '../app/todoSlice';
import styles from '../features/counter/Counter.module.css';

export default function TodoList(props) {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  const handleDelete = todoItem => {
    dispatch(deleteTodo(todoItem));
  }

  const handleToggle = todoIdx => {
    dispatch(toggleTodo(todoIdx));
  }
  const todoList = todos.value.map((item, idx) => {
    return (
      <div key={idx}>
        <li className={styles.values} key={idx} onClick={() => handleToggle(idx)}>
          {item.name} | {item.done ? 'done' : 'not done'}
        </li>
        <button className={styles.button} onClick={() => handleDelete(item.name)}>x</button>
      </div>
    )
  })
  if (todos.value.length > 0)
    return (
      <div>
        <h3 className={styles.values}>TODOS: </h3>
        <ul>
          {todoList}
        </ul>
      </div>
    )
  else
    return (
      <div>
        TODOS:
        <p> Yay! No more work today !</p>
      </div>
    )
}
