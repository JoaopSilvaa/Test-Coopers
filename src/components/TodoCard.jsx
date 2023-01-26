import React from 'react';
import PropTypes from 'prop-types';

export default function TodoCard({ todo, removeTodo }) {
  const changeSituation = () => {
    if (todo.situation === 1) {
      todo.situation = 0;
    } else {
      todo.situation = 1;
      removeTodo();
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={ changeSituation }
      >
        O
      </button>
      <span>{todo.content}</span>
      <button
        type="button"
      >
        delete
      </button>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.objectOf.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
