import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.scss';
import axios from 'axios';

const Header = () => {
  const [sendPreference, setSendPreference] = useState({
    term: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log(sendPreference);
    axios
      .post('/yelp/search', sendPreference)
      .then((response) => {
        console.log('data sent to server');
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main className='header'>
        {/* left corner logo  */}
        <h3 className='logo-form'>MeWantFood</h3>
        <form onSubmit={handleSubmit} className='nav-btn-container'>
          <input
            name='preference'
            type='text'
            placeholder='How Hungry You Wanna Be?'
            className='input-header'
            value={sendPreference.term}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, term: e.target.value })
            }
          />
          <input
            name='preference'
            type='text'
            placeholder='Enter Location'
            className='input-header'
            value={sendPreference.location}
            onChange={(e) =>
              setSendPreference({ ...sendPreference, location: e.target.value })
            }
          />
          <button className='btn search-btn'>Search</button>
        </form>
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
