import React from 'react';
import PropTypes from 'prop-types';

export default function TodoCard({ todo }) {
  const changeSituation = async () => {
    const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
    if (listTodos && listTodos.length !== 0) {
      const listChangedTodo = listTodos
        .map((item) => {
          if (item.content === todo.content) {
            if (item.situation === 0) {
              item.situation = 1;
            } else {
              item.situation = 0;
            }
          }
          return item;
        });
      localStorage.setItem('listTodos', JSON.stringify(listChangedTodo));
    }
  };

  const deleteTodo = async () => {
    const listTodos = await JSON.parse(localStorage.getItem('listTodos'));
    if (listTodos && listTodos.length !== 0) {
      const listChangedTodo = listTodos
        .filter((item) => item.content !== todo.content);
      localStorage.setItem('listTodos', JSON.stringify(listChangedTodo));
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
        onClick={ deleteTodo }
      >
        delete
      </button>
    </div>
  );
}

TodoCard.propTypes = {
  todo: PropTypes.objectOf.isRequired,
};
