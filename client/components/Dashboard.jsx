import { set } from 'mongoose';
import React from 'react';
import { useState} from 'react'
import Header from './Header';
import Main from './main';
import './stylesheet.scss';

function Dashboard({user, setUser, cookies, setCookie, removeCookie}) {
  const [fetchedData, setFetchedData] = useState([]);
  return (
    <div className='dashboard'>
      <Header user={user} fetchedData={fetchedData} setFetchedData={setFetchedData} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>
      <Main user={user} fetchedData={fetchedData} setFetchedData={setFetchedData} cookies={cookies} setCookie={setCookie}/>
    </div>
  );
}

export default Dashboard;
