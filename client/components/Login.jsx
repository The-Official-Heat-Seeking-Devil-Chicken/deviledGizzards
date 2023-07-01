import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(null);

  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='summoner'
          type='text'
          placeholder='username'
          value={formValue}
          onChange={(event) => setFormValue(event.target.value)}
        />
        <input id='formButton' type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default Login;
