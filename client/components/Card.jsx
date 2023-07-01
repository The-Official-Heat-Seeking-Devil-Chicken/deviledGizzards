import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Card = (props) => {
  //   const { picUrl, category, description, likeCount, location, locationName } =
  //     props;

  return (
    <div className='card'>
      <div className='posted-pic'>
        <img
          src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
          alt='restuarant'
          className='posted-img'
        />
      </div>
      <div className='card-details'>
        <h5 className='card-name'>Panera Pancake</h5>
        <p className='locaton'>
          Address :8046 New Hampshire Ave, Hyattsville, MD 20783
        </p>
        <p className='description'>Closes 10:30PM</p>
        <p className='cost'>$$$$$</p>
      </div>
    </div>
  );
};

export default Card;
