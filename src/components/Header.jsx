import React, { useState } from 'react';
import fill from '../assets/Fill1.png';
import room from '../assets/Room.jpg';
import BG from '../assets/BG.png';
import Login from './Login';
import './Header.css';

export default function Header() {
  const [loginHidden, setLoginHidden] = useState(true);

  return (
    <section>
      { !loginHidden ? <Login setLoginHidden={ setLoginHidden } /> : null }
      <header
        className="headerTop"
      >
        <div className="logoHeader">
          <img src={ fill } alt="logo coopers" />
          <span>coopers</span>
        </div>
        <button
          className="buttonLogin"
          type="button"
          onClick={ () => setLoginHidden(false) }
        >
          entrar
        </button>
      </header>
      <img src={ BG } alt="logo coopers" className="logo" />
      <div className="textHeader">
        <div>
          <p className="paragraphOneHeader">
            Organize
            <br />
            <span>your daily jobs</span>
          </p>
          <p className="paragraphTwoHeader">The only way to get things done</p>
          <a href="todo" className="linkForTodo">Go to to-do list</a>
        </div>
        <img src={ room } alt="sala comum ambiente agradável" className="room" />
      </div>
    </section>
  );
}
