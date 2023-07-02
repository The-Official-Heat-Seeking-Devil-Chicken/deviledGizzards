import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  // const URL = 'http://localhost:3000/signup';

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then((res)=>{
      res.json();
    })
    .then((data)=>{
      console.log("HELLLOOO WORLD");
      console.log(data);
    })
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter Username Here"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter Password Here"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input id="formButton" type="submit" value="Submit" />
      </form>
      <a href="/signup">SIGN UP</a>
    </div>
  );
}

export default Login;
