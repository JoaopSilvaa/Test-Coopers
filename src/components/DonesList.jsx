import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

export default function DonesList() {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setItems() {
      const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
      if (listTodos && listTodos.length !== 0) {
        const listDone = listTodos.filter((todo) => todo.situation === 1);
        setList(listDone);
        setLoading(false);
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
        listTodo.map((todo, index) => (<TodoCard
          todo={ todo }
          key={ index }
        />)))
        : <span>Carregando</span> }
    </div>
  );
}
