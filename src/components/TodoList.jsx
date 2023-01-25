import React from 'react';
import DonesCard from './DonesCard';
import TodoCard from './TodoCard';

export default function TodoList() {
  return (
    <section>
      <div>
        <p>
          <h1>To-do List</h1>
          <br />
          Drag and drop to set your main priorities, check when
          done and create what´s new.
        </p>
      </div>
      <div>
        <TodoCard />
        <DonesCard />
      </div>
    </section>
  );
}
