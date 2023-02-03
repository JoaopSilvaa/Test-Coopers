import React, { useState } from 'react';
import DonesList from './DonesList';
import TodoList from './TodoList';
import './TodosSection.css';
import detail1 from '../assets/DetailPage1.png';
import detail2 from '../assets/DetailPage2.png';
import { createTask, deleteAllTask, requestData } from '../services/requests';

export default function TodosSection() {
  const [Todo, setTodo] = useState('');

  const handleTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const addTodos = async () => {
    const token = await JSON.parse(localStorage.getItem('token'));
    if (token) {
      await createTask({ content: Todo });
      const listTodos = await requestData();
      const dones = listTodos.filter((item) => item.situation === 1);
      const todos = listTodos.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(todos));
      localStorage.setItem('listDones', JSON.stringify(dones));
      setTodo('');
    } else {
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
    }
  };

  const eraseAll = async (list) => {
    const token = await JSON.parse(localStorage.getItem('token'));
    if (token) {
      if (list === 'dones') {
        await deleteAllTask(1);
      }
      if (list === 'todos') {
        await deleteAllTask(0);
      }
      const listTodos = await requestData();
      const dones = listTodos.filter((item) => item.situation === 1);
      const todos = listTodos.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(todos));
      localStorage.setItem('listDones', JSON.stringify(dones));
    } else {
      if (list === 'dones') {
        localStorage.removeItem('listDones');
      }
      if (list === 'todos') {
        localStorage.removeItem('listTodos');
      }
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
