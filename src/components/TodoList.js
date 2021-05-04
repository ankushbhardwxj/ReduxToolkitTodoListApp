import React from 'react';
import { useSelector } from 'react-redux';
import { getTodos } from '../app/todoSlice';

export default function TodoList(props) {
  const todos = useSelector(getTodos) || [];
  const todoList = todos.map((item, idx) => {
    return <li key={idx}>{item.name}</li>
  })
  return (
    <div>
      <ul>
        {todoList}
      </ul>
    </div>
  )
}
