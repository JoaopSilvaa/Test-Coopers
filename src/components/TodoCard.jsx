import React from 'react';
import PropTypes from 'prop-types';
import './TodoCard.css';
import { deleteTask, requestData, updateTask } from '../services/requests';

export default function TodoCard({ content, situation }) {
  const changeSituation = async () => {
    const token = await JSON.parse(localStorage.getItem('token'));
    if (token) {
      const allTodos = await requestData();
      const todo = allTodos
        .find((item) => item.content === content);
      await updateTask(todo.id);
      const listTodos = await requestData();
      const dones = listTodos.filter((item) => item.situation === 1);
      const todos = listTodos.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(todos));
      localStorage.setItem('listDones', JSON.stringify(dones));
    } else {
      const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
      if (listTodos && listTodos.length !== 0) {
        const todo = listTodos
          .find((item) => item.content === content);
        todo.situation = 1;
        const listWithoutDone = listTodos.filter((item) => item.content !== todo.content);
        const list = JSON.parse(localStorage.getItem('listDones'));
        if (!list) {
          localStorage.setItem('listDones', JSON.stringify([todo]));
        } else {
          list.push(todo);
          localStorage.setItem('listDones', JSON.stringify(list));
        }
        localStorage.setItem('listTodos', JSON.stringify(listWithoutDone));
      }
    }
  };

  const deleteTodo = async () => {
    const token = await JSON.parse(localStorage.getItem('token'));
    if (token) {
      const allTodos = await requestData();
      const todo = allTodos
        .find((item) => item.content === content);
      await deleteTask(todo.id);
      const listTodos = await requestData();
      const dones = listTodos.filter((item) => item.situation === 1);
      const todos = listTodos.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(todos));
      localStorage.setItem('listDones', JSON.stringify(dones));
    } else {
      if (situation === 0) {
        const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
        const listChangedTodo = listTodos
          .filter((item) => item.content !== content);
        localStorage.setItem('listTodos', JSON.stringify(listChangedTodo));
      }
      if (situation === 1) {
        const listDones = await JSON.parse(localStorage.getItem('listDones'));
        const listChangedTodo = listDones
          .filter((item) => item.content !== content);
        localStorage.setItem('listDones', JSON.stringify(listChangedTodo));
      }
    }
  };

  return (
    <div className="todoCard">
      <button
        type="button"
        onClick={ changeSituation }
        className={ situation === 0 ? 'todoAdd' : 'doneTodo' }
      >
        { situation === 0 ? '' : '✔' }
      </button>
      <span>
        { content }
      </span>
      <button
        type="button"
        onClick={ deleteTodo }
        className="deleteButton"
      >
        delete
      </button>
    </div>
  );
}

TodoCard.propTypes = {
  content: PropTypes.string.isRequired,
  situation: PropTypes.number.isRequired,
};
