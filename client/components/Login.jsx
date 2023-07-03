import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

function Login() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  // const URL = 'http://localhost:3000/signup';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log('HELLLOOO WORLD');
        console.log(data);
      });
  };

  return (
    <div className='login-background'>
      <form onSubmit={handleSubmit} className='login-form'>
        <p className='title'>ME WANT FOOD</p>
        <input
          className='login-input'
          name='username'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className='login-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
        <a href='/signup'>SIGN UP</a>
      </form>
    </div>
  );
}

export default Login;
