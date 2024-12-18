import React from 'react'
import './Cards.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const Cards = ({title, description, icon, buttonText,route,onClick}) => {



  const navigate = useNavigate();

  // Handle button click to route to the relevant page
  const handleButtonClick = () => {
    navigate(route); // Navigate to the page passed in the route prop
  };

  return (
    <div className="card">
      <div className="card-header">
      {icon && <img src={icon} alt="icon" />}
      <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <button onClick={onClick}></button>
    </div>
  );
};

export default Cards