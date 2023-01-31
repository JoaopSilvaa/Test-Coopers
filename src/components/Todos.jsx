import React from 'react';
import TodosSection from './TodosSection';
import './Todos.css';
import BG2 from '../assets/BG2.png';

export default function Todos() {
  return (
    <section id="todo">
      <div>
        <img id="bg2" src={ BG2 } alt="imagem de fundo listra preta" />
        <p className="titleTodo">
          <span>To-do List</span>
          <br />
          Drag and drop to set your main priorities, check
          <br />
          when done and create what´s new.
        </p>
      </div>
      <TodosSection />
    </section>
  );
}
