import React from 'react';
import Card from './Card';
import './Cardlist.css';

const Cardlist = ({robots}) => {
  let cardsArray = robots.map(user => {
    return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
  });
  return (
    <div className="cards">
      {cardsArray}
    </div>
  )
};

export default Cardlist;
