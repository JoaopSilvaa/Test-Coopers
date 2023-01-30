import React, { useState } from 'react';
import DonesList from './DonesList';
import TodoList from './TodoList';
import './TodosSection.css';
import detail1 from '../assets/DetailPage1.png';
import detail2 from '../assets/DetailPage2.png';

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
    <div className="todoSection">
      <div id="todoBlock">
        <p id="titleTodo">
          <span>To-do</span>
          <br />
          Take a breath.
          <br />
          Start doing.
        </p>
        <div id="todosList">
          <div id="inputTodos">
            <button
              type="button"
              onClick={ addTodos }
              id="confirmTask"
            >
              ✔
            </button>
            <input
              type="text"
              onChange={ handleTodo }
              value={ Todo }
              id="inputTask"
              placeholder="this is a new task"
            />
          </div>
          <TodoList />
          <button
            type="button"
            onClick={ () => eraseAll('todos') }
            className="buttonErase"
          >
            erase all
          </button>
        </div>
      </div>
      <div className="donesBlock">
        <DonesList />
        <button
          type="button"
          onClick={ () => eraseAll('dones') }
          className="buttonErase"
        >
          erase all
        </button>
      </div>
      <img id="detail1" src={ detail1 } alt="detalhe da página, triangulo verde claro" />
      <img id="detail2" src={ detail2 } alt="detalhe da página, triangulo verde escuro" />
    </div>
  );
}
