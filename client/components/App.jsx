import React from 'react';
import { useState, useEffect} from 'react'
import { Route, Routes, Redirect } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';
import './stylesheet.scss';
import { useCookies } from 'react-cookie';
import NotFound from './NotFound.jsx';

function App() {
  const [user, setUser] = useState('testuser')
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login user={user} setUser={setUser} cookies={cookies} setCookie={setCookie}/>}></Route>
        <Route exact path='/signup' element={<Signup user={user} setUser={setUser} cookies={cookies} setCookie={setCookie}/>}></Route>
        <Route exact path='/home' element={<Dashboard user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>}></Route>
        <Route exact path='*' element={<NotFound user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
