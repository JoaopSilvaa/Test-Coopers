import React, { useState } from 'react';
import fill from '../assets/Fill1.png';
import room from '../assets/Room.jpg';
import Login from './Login';

export default function Header() {
  const [loginHidden, setLoginHidden] = useState(true);

  return (
    <section>
      { !loginHidden ? <Login setLoginHidden={ setLoginHidden } /> : null }
      <header>
        <div>
          <img src={ fill } alt="logo coopers" />
          <span>coopers</span>
        </div>
        <button
          type="button"
          onClick={ () => setLoginHidden(false) }
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
