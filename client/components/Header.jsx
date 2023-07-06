import React, { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './stylesheet.scss';
import axios from 'axios';


const Header = ({user, setUser, setFetchedData, fetchedData, cookies, setCookie, removeCookie}) => {
  const [sendPreference, setSendPreference] = useState({
    term: '',
    location: '',
  });
  const navigate = useNavigate()
  // console.log(user)
  const handleLogout = () => {
    navigate('/')
    removeCookie('user')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log('sendPref:', sendPreference);
    axios///search?term=${sendPreference.term}&location=${sendPreference.location}
      .get(`http://localhost:3000/yelp/search?term=${sendPreference.term}&location=${sendPreference.location}`)
      .then((response) => {// update response
        const rawData = response.data.businesses;
        console.log('fetched data before setter: ',fetchedData)
        // console.log(rawData);
        setFetchedData(rawData);
        console.log('fetchedData after setter: ',fetchedData);
        console.log('data sent to server');
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
// http://localhost:3000/user?name=Gourav&age=11, 
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
            <p className='account-name'>{cookies.user.username}</p>
            <button onClick={handleLogout}>logout</button>
            {/* <p className='account-name'>Merid</p> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
