import React from 'react';
import Card from './card';

const Main = (props) => {
  const { posts } = props;
  console.log(posts);

  return <div className='main'>{cardsArr}</div>;
};

export default Main;
