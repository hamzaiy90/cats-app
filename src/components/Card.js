import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
      <div className="container">
        <img src={`https://robohash.org/${id}?set=set4&200x200`} alt="robo" className="image" />
        <h3 className="name">{name}</h3>
        <p className="email">{email}</p>
      </div>
    )
}

export default Card
