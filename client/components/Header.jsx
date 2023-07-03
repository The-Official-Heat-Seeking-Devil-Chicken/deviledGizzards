import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <>
      <main className='header'>
        {/* left corner logo  */}
        <h3 className='logo-form'>MeWantFood</h3>
        <div className='nav-btn-container'>
          <input
            name='preference'
            type='text'
            placeholder='How Hungry You Wanna Be?'
            className='input-header'
          />
        </div>
        <div className='account-container'>
          <div className='profile-pic-plain-color'></div>
          <div className='account-name-container'>
            <p className='account-name'>Dawit</p>
            <p className='account-name'>Merid</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
