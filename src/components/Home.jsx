import React from 'react';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import GoodThings from './GoodThings';
import Header from './Header';
import Todos from './Todos';

export default function Home() {
  return (
    <main>
      <Header />
      <Todos />
      <GoodThings />
      <GetInTouch />
      <Footer />
    </main>
  );
}
