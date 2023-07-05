import { set } from 'mongoose';
import React from 'react';
import { useState} from 'react'
import Header from './Header';
import Main from './main';
import './stylesheet.scss';

function Dashboard({user, setUser}) {
  const [fetchedData, setFetchedData] = useState([]);
  return (
    <div className='dashboard'>
      <Header user={user} fetchedData={fetchedData} setFetchedData={setFetchedData}/>
      <Main user={user} fetchedData={fetchedData} setFetchedData={setFetchedData}/>
    </div>
  );
}

export default Dashboard;
