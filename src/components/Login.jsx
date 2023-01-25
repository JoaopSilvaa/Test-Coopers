import React from 'react';
import image1 from '../assets/image1.png';

export default function Login() {
  return (
    <div>
      <button
        type="button"
      >
        close
      </button>
      <div>
        <img src={ image1 } alt="ilustração de uma mulher" />
        <h1>Sign in</h1>
        <span>to access your list</span>
      </div>
      <form>
        <label htmlFor="user">
          User:
          <input
            id="user"
            type="text"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
          />
        </label>
        <button
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
