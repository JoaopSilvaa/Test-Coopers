import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import image1 from '../assets/image1.png';

export default function Login({ setLoginHidden }) {
  return (
    <div className="Login">
      <button
        id="buttonCloseLogin"
        type="button"
        onClick={ () => setLoginHidden(true) }
      >
        close
      </button>
      <div className="LoginContainer">
        <img id="image1" src={ image1 } alt="ilustração de uma mulher" />
        <form className="formLogin">
          <p>
            Sign in
            <br />
            <span>to access your list</span>
          </p>
          <label htmlFor="user" className="labelLogin">
            User:
            <input
              className="inputLogin"
              id="user"
              type="text"
            />
          </label>
          <label htmlFor="password" className="labelLogin">
            Password:
            <input
              className="inputLogin"
              id="password"
              type="password"
            />
          </label>
          <button
            id="buttonLogin"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setLoginHidden: PropTypes.func.isRequired,
};
