import React from 'react';
import Header from './Header';
import Main from './main';
import './dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <Main />
    </div>
  );
}

export default Dashboard;
