import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

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
      <p>
        <span>Done</span>
        <br />
        Congratulions!
        <br />
        You have done
        {' '}
        { listTodo.length }
        {' '}
        tasks
      </p>

      { !loading ? (
        listTodo.map(({ content, situation }, index) => (<TodoCard
          content={ content }
          key={ index }
          situation={ situation }
        />)))
        : <span>Carregando</span> }
    </div>
  );
}
