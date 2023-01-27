import React, { useState } from 'react';
import DonesList from './DonesList';
import TodoList from './TodoList';
import './TodosSection.css';

export default function TodosSection() {
  const [Todo, setTodo] = useState('');

  const handleTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const addTodos = () => {
    const listTodos = JSON.parse(localStorage.getItem('listTodos'));
    if (!listTodos) {
      const todo = {
        situation: 0,
        content: Todo,
      };
      localStorage.setItem('listTodos', JSON.stringify([todo]));
    } else {
      const todo = {
        situation: 0,
        content: Todo,
      };
      localStorage.setItem('listTodos', JSON.stringify([todo, ...listTodos]));
    }
    setTodo('');
  };

  const eraseAll = (list) => {
    if (list === 'dones') {
      localStorage.removeItem('listDones');
    }
    if (list === 'todos') {
      localStorage.removeItem('listTodos');
    }
  };

  return (
    <div>
      <p>
        <span>To-do</span>
        <br />
        Take a breath.
        <br />
        Start doing.
      </p>
      <div>
        <button
          type="button"
          onClick={ addTodos }
        >
          O
        </button>
        <input
          type="text"
          onChange={ handleTodo }
          value={ Todo }
        />
        <TodoList />
        <button
          type="button"
          onClick={ () => eraseAll('todos') }
        >
          erase all
        </button>
        <DonesList />
        <button
          type="button"
          onClick={ () => eraseAll('dones') }
        >
          erase all
        </button>
      </div>
    </div>
  );
}
