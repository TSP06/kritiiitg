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
  const navigate = useNavigate();

  const pscard = [
    {
      title: 'High Prep',
      description: `
        The High Prep category is designed for problem statements that require significant effort, advanced planning,
        and dedicated collaboration. These challenges involve complex scenarios and tasks that demand deep domain
        knowledge, strategic problem-solving skills, and sustained teamwork. 
        

      `,
      buttonText: 'See PS',
      icon: highprep,
      route: '/highps',
    },
    {
      title: 'Mid Prep',
      description: `
        The Mid Prep category is suitable for challenges requiring a moderate level of preparation and balanced effort.
        These problem statements strike a balance between complexity and feasibility, allowing teams to showcase their
        problem-solving abilities without extensive resource demands. 
      `,
      buttonText: 'See PS',
      icon: midprep,
      route: '/midps',
    },
    {
      title: 'Low Prep',
      description: `
        The Low Prep category is tailored for simpler problem statements that can be tackled with minimal effort and
        resources. These challenges are straightforward and accessible, ideal for participants who are new to problem
        solving or prefer a less intensive workload. 
        
        
      `,
      buttonText: 'See PS',
      icon: lowprep,
      route: '/lowps',
    },
    {
      title: 'No Prep',
      description: `
        The No Prep category offers light-hearted challenges that require little to no preparation. These tasks are
        designed for quick engagement, offering a fun and straightforward way to participate with minimal effort. 
        
        
      `,
      buttonText: 'See PS',
      icon: noprep,
      route: '/noprepps',
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className='ps-header' id='pspage'>
      <Header />
      <div className='pageps'>
        <div className='ps-page-container'>
          {pscard.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              onClick={() => handleButtonClick(card.route)}
            />
          ))}
          <div className='bgcolor2'></div>
        </div>
      </div>
    </div>
  );
};

export default PsPage;
