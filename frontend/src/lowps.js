// MPCards.js
import React from 'react';
import './prep.css'; // Style the cards in this CSS file
import Card from './mediumprep/Card1'; // Assuming you have a Card component that renders the individual card structure
import Heading from './mediumprep/Heading'
import image2 from './assets/lowprep.png'
const MPCards = (userLoggedIn
    
) => {
  const mpcard = [
    {
      title: 'Software Development',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: require('./assets/Download.png'), // Import the icon correctly
    },
    {
      title: 'Software Development',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: require('./assets/Download.png'), // Import the icon correctly
    },
    {
      title: 'Software Development',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: require('./assets/Download.png'), // Import the icon correctly
    },
    {
      title: 'Software Development',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: require('./assets/Download.png'), // Import the icon correctly
    },
  ];

  const title = "Low Prep";



  return (
<div className = "preppage">
    <Heading title={title} icon={image2}/>
    <div className="mp-cards-container">
      {mpcard.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description1={card.description1}
          description2={card.description2}
          buttonText={card.buttonText}
          icon={card.icon}
          userLoggedIn={userLoggedIn}
          category="lowprep"
        />
      ))}
    </div>
    </div>
  );
};

export default MPCards;
