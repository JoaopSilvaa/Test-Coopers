import React from 'react';
import './GoodThings.css';
import { things } from './things';
import ThingCard from './ThingCard';

export default function GoodThings() {
  return (
    <section className="GoodThings">
      <h2>good things</h2>
      <div id="sectionThings">
        {things.map((thing) => <ThingCard thing={ thing } key={ thing.id } />)}
      </div>
    </section>
  );
}
