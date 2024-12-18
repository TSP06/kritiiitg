import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './components/Cards';
import Header from './components/Header';
import highprep from './assets/highprep.png';
import midprep from './assets/midprep.png';
import lowprep from './assets/lowprep.png';
import noprep from './assets/noprep.png';
import './pspage.css';
import FAQ from './faq';

const PsPage = () => {
  // Use useNavigate hook
  const navigate = useNavigate();

  // Style Object for Cards Grid Container

  // Style Object for Page Container

  const pscard = [
    {
      title: 'High Prep',
      description:
        'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: highprep,
      route: '/highps', // Route for High Prep
    },
    {
      title: 'Mid Prep',
      description:
        'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: midprep,
      route: '/midps', // Route for Mid Prep
    },
    {
      title: 'Low Prep',
      description:
        'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: lowprep,
      route: '/lowps', // Route for Low Prep
    },
    {
      title: 'No Prep',
      description:
        'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: noprep,
      route: '/noprepps', // Route for No Prep
    },
  ];

  // Handle card button click
  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the specific route
  };

  return (
    <div className='ps-header' id="pspage">
      {/* Header */}
      <Header />
      <div className='pageps'>
        {/* Cards Grid */}
        <div className='ps-page-container'>
          {pscard.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              
              onClick={() => handleButtonClick(card.route)} // Add click handler
            />
          ))}
          <div className="bgcolor2"></div>
        </div>
      </div>
    </div>
  );
};

export default PsPage;
