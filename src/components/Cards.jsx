import React from 'react'
import './Cards.css'
const Cards = ({title, description, icon, butttonText}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {icon && <div className="icon">{icon}</div>}
      <button>{butttonText}</button>
    </div>
  )
}

export default Cards
