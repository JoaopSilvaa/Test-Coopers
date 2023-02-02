import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import image1 from '../assets/image1.png';
import { requestData, sendLogin, setToken } from '../services/requests';

export default function Login({ setLoginHidden }) {
  const [failedLogin, setFailedLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Error, setError] = useState('');
  const timeError = 1000;

  const login = async (event) => {
    event.preventDefault();
    try {
      const { token } = await sendLogin({ username, password });
      setToken(token);
      setLoginHidden(true);
      const allTasks = await requestData();
      const dones = allTasks.filter((item) => item.situation === 1);
      const todos = allTasks.filter((item) => item.situation === 0);
      localStorage.setItem('listTodos', JSON.stringify(todos));
      localStorage.setItem('listDones', JSON.stringify(dones));
    } catch (error) {
      setError('Invalid Fields');
      setFailedLogin(true);
      setTimeout(() => setFailedLogin(false), timeError);
      clearTimeout();
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    const changeState = {
      username: () => setUsername(value),
      password: () => setPassword(value),
    };
    changeState[name]();
  };

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
              value={ username }
              type="text"
              name="username"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password" className="labelLogin">
            Password:
            <input
              className="inputLogin"
              id="password"
              type="password"
              value={ password }
              name="password"
              onChange={ handleChange }
            />
          </label>
          <button
            id="buttonLogin"
            type="submit"
            onClick={ login }
          >
            Sign in
          </button>
          { failedLogin && <span>{Error}</span> }
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setLoginHidden: PropTypes.func.isRequired,
};
