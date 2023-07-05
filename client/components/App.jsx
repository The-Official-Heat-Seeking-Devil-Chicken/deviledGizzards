import React from 'react';
import { useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';
import './stylesheet.scss';

function App() {
  const [user, setUser] = useState('testuser')
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login user={user} setUser={setUser}/>}></Route>
        <Route exact path='/signup' element={<Signup user={user} setUser={setUser}/>}></Route>
        <Route exact path='/home' element={<Dashboard user={user} setUser={setUser}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
