import React from 'react';
import './Card1.css';

const Card1 = ({ title, description1, description2, icon, buttonText }) => {
  return (
    <div className="card1">
      <div className="card-content">
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        {icon && <img src={icon} className="card-icon" alt="icon" />}
      </div>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card1;