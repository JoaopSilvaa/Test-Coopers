import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

export default function DonesList({ todos, removeTodo }) {
  const [listTodo, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setList(todos);
    setLoading(false);
  }, [todos]);

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
          removeTodo={ removeTodo }
        />)))
        : <span>Carregando</span> }
    </div>
  );
}

DonesList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
