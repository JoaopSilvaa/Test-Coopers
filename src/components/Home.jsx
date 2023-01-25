import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

export default function Home() {
  return (
    <main>
      <Header />
      <TodoList />
    </main>
  );
}
