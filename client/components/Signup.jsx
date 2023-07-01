import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter Username Here"
          value={username}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <input
          name="password"
          type="text"
          placeholder="Enter Password Here"
          value={password}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <input id="formButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
