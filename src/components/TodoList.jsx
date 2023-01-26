import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function TodoList({ todos, removeTodo }) {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setList(todos);
    setLoading(false);
  }, []);

  return (
    !loading && listTodo.length !== 0 ? (
      listTodo.map((todo, index) => (<TodoCard
        todo={ todo }
        key={ index }
        removeTodo={ removeTodo }
      />)))
      : <span>Carregando</span>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
