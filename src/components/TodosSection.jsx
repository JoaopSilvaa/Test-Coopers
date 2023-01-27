import React, { useState } from 'react';
import DonesList from './DonesList';
import TodoList from './TodoList';

export default function TodosSection() {
  const [Todo, setTodo] = useState('');

  const handleTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const addTodos = async () => {
    const todo = {
      situation: 0,
      content: Todo,
    };

    const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
    if (!listTodos) {
      localStorage.setItem('listTodos', JSON.stringify([todo]));
    } else {
      localStorage.setItem('listTodos', JSON.stringify([todo, ...listTodos]));
    }
    setTodo('');
  };

  const eraseAll = async (list) => {
    const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
    if (listTodos && listTodos.length !== 0 && list === 'dones') {
      const listWithoutDones = listTodos.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(listWithoutDones));
    }
    if (listTodos && listTodos.length !== 0 && list === 'todos') {
      const listWithoutTodos = listTodos.filter((item) => item.situation === 1);
      localStorage.setItem('listTodos', JSON.stringify(listWithoutTodos));
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
