import React from 'react';
import TodosSection from './TodosSection';

export default function Todos() {
  return (
    <section>
      <div>
        <p>
          <span>To-do List</span>
          <br />
          Drag and drop to set your main priorities, check when
          done and create what´s new.
        </p>
      </div>
      <div>
        <TodosSection />
      </div>
    </section>
  );
}
