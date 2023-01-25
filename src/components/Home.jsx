import React from 'react';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import GoodThings from './GoodThings';
import Header from './Header';
import TodoList from './TodoList';

export default function Home() {
  return (
    <main>
      <Header />
      <TodoList />
      <GoodThings />
      <GetInTouch />
      <Footer />
    </main>
  );
}
