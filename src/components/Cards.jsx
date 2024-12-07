import React from 'react'
import './Cards.css'
const Cards = ({title, description, icon, buttonText}) => {
  return (
    <div className="card">
      <div className="card-header">
      {icon && <img src={icon} alt="icon" />}
      <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Cards