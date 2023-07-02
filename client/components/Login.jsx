import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();


  const URL = "/api/";

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
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
        console.log(data);
      });
  };

  return (
    <div className="login-background">
      <form onSubmit={handleSubmit} className="login-form">
        <p className="title">ME WANT FOOD</p>
        <input className='login-input'
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input className='login-input'
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
        <a href="/signup">SIGN UP</a>
      </form>
    </div>
  );
}

export default Login;
