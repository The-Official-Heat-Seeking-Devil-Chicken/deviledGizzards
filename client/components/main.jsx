import React, { useState, useEffect } from 'react';
import Card from './Card';
import './stylesheet.scss';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Main = ({user, setFetchedData, fetchedData, cookies}) => {

  // const navigate = useNavigate()
  // if(!cookies)
  // {
  //   console.log('no cookies!')
  //   navigate('/')
  // }

  useEffect(() => {
    
    axios
      .get('http://localhost:3000/yelp', 
      { params: { location : user.zipcode}})
      .then((response) => {
        const rawData = response.data.businesses;
        setFetchedData(rawData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className='main'>
      {fetchedData.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          location={item.location.display_address}
          closes={item.is_closed}
          price={item.price}
          picUrl={item.image_url}
        />
      ))}
    </article>
  );
};

export default Main;
