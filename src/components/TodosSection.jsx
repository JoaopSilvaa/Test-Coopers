import React, { useState, useEffect } from 'react';
import DonesList from './DonesList';
import TodoList from './TodoList';

export default function TodosSection() {
  const [todosNotDone, setTodosNotDone] = useState([]);
  const [todosDone, setTodosDone] = useState([]);
  const [Todo, setTodo] = useState('');

  const handleTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const addTodos = () => {
    const todo = {
      situation: 0,
      content: Todo,
    };

    const listTodos = todosNotDone;
    listTodos.push(todo);
    setTodosNotDone(listTodos);
    setTodo('');
  };

  const removeTodo = () => {
    const list = todosNotDone.filter((todo) => todo.situation === 1);
    console.log(list);
    const listNotDones = todosNotDone.filter((todo) => todo.situation === 0);
    console.log(listNotDones);
    setTodosDone(listNotDones);
    setTodosDone(list);
  };

  useEffect(() => {
    console.log('executou');
  }, [todosDone]);

  useEffect(() => {
    console.log('executou');
  }, [todosNotDone]);

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
        <TodoList todos={ todosNotDone } removeTodo={ removeTodo } />
        <button
          type="button"
        >
          erase all
        </button>
        <DonesList todos={ todosDone } removeTodo={ removeTodo } />
      </div>
    </div>
  );
}
