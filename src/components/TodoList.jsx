import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

export default function TodoList() {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setItems() {
      const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
      if (listTodos && listTodos.length !== 0) {
        const listTodosNotDone = listTodos.filter((todo) => todo.situation === 0);
        setList(listTodosNotDone);
        setLoading(false);
      }
    }
    setItems();
  }, [listTodo]);

  return (
    !loading ? (
      listTodo.map((todo, index) => (<TodoCard
        todo={ todo }
        key={ index }
      />)))
      : <span>Carregando</span>
  );
}
