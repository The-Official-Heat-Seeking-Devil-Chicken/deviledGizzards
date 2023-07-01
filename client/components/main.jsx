import React from 'react';
import Card from './Card';
import './main.scss';

const Main = (props) => {
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
