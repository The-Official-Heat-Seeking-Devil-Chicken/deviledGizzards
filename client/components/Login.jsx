import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
// import "./login.scss";
import "./stylesheet.scss";

function Login({user, setUser, cookies, setCookie}) {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = "http://localhost:3000/login";

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch(URL, {
      method: "POST",
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
        console.log(res)
        return res.json();
      })
      .then((data) => {
        if (data.error.status === 404) {
          alert("Wrong Username/Password")
        } else {
          setUser(data)
          setCookie('user', data.username)
          sessionStorage.setItem('user', data.username)
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log("Need to doublecheck username/password");
      });
  };

  return (
    <div className="login-background">
      <form onSubmit={handleSubmit} className="login-form">
        <p className="title">ME WANT FOOD</p>
        <input
          ref={usernameRef}
          className="login-input"
          name="username"
          type="text"
          placeholder="Username"
        />
        <input
          ref={passwordRef}
          className="login-input"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button>Login</button>
        <button onClick={() => {navigate('/signup')}}>SIGN UP</button>
      </form>
    </div>
  );
}

export default Login;
