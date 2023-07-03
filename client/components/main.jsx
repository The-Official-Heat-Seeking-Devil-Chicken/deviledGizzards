import React, { useState, useEffect } from 'react';
import Card from './Card';
import './main.scss';
import axios from 'axios';

const Main = (props) => {
  // const {zipCode} = props

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/yelp')
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
