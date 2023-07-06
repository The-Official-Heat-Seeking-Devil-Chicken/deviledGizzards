import { set } from 'mongoose';
import React, { useEffect } from 'react';
import { useState} from 'react'
import Header from './Header';
import Main from './main';
import './stylesheet.scss';
import { useNavigate } from "react-router-dom";

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
