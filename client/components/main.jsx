import React, { useState, useEffect } from 'react';
import Card from './Card';
import './main.scss';
import axios from 'axios';
import { BEARER_TOKEN } from '../api.js';

const Main = (props) => {
  // const {zipCode} = props

  const dummyZip = '20009';
  const [fetchedData, setFetchedData] = useState([]);

  const fetchYelp = () => {
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${dummyZip}`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
          params: {
            categories: 'breakfast_brunch',
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  return (
    <article className='main'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      {/* {cardsArr} */}
    </article>
  );
};

export default Main;
