import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import './DonesList.css';

export default function DonesList() {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setItems() {
      const listTodos = await JSON.parse(localStorage.getItem('listDones'));
      if (listTodos && listTodos.length !== 0) {
        setList(listTodos);
        setLoading(false);
      } else {
        setList([]);
      }
    }
    setItems();
  }, [listTodo]);

  return (
    <div>
      <p id="titleDone">
        <span>Done</span>
        <br />
        Congratulions!
        <br />
        <b>
          You have done
          {' '}
          { listTodo.length }
          {' '}
          tasks
        </b>
      </p>

      { !loading ? (
        listTodo.map(({ content, situation }, index) => (<TodoCard
          content={ content }
          key={ index }
          situation={ situation }
        />)))
        : <span> </span> }
    </div>
  );
}
