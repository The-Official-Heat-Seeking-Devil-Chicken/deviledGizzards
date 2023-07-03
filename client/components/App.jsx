import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './Dashboard.jsx';
import './app.scss';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/home' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
