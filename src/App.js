import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import TodoForm from './components/TodoList';
import TodoList from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Counter
        <Counter />
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
