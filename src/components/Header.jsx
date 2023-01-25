import React from 'react';
import fill from '../assets/Fill1.png';
import room from '../assets/Room.jpg';

export default function Header() {
  return (
    <section>
      <header>
        <div>
          <img src={ fill } alt="logo coopers" />
          <span>coopers</span>
        </div>
        <button
          type="button"
        >
          entrar
        </button>
      </header>
      <div>
        <div>
          <p>
            Organize
            <br />
            <span>your daily jobs</span>
          </p>
          <p>The only way to get things done</p>
          <span>Go to to-do list</span>
        </div>
        <img src={ room } alt="sala comum ambiente agradável" />
      </div>
    </section>
  );
}
