import React from 'react'
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './About';
import Navbar from './Navbar'
import unionIcon from './assets/Union.png';
import Navbar from './Navbar';
import Heading from './mediumprep/Heading';
import Card1 from './mediumprep/Card1';
import Icon from './assets/Download.png';
function App() {
  const pscard = [
    {
      title: 'High Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'Mid Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'Low Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'No Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
  ]
  const mpcard =[
    {title: 'Software Devlopment',
      description1:'by Coding Club',
      description2:'Deadline : 24/2/2025',      
      buttonText:'Register',
      icon: Icon,
    },
    {title: 'Software Devlopment',
      description1:'by Coding Club',
      description2:'Deadline : 24/2/2025',
      buttonText:'Register',
      icon: Icon,
    },
    {title: 'Software Devlopment',
      description1:'by Coding Club',
      description2:'Deadline : 24/2/2025',
      buttonText:'Register',
      icon: Icon,
    },
    {title: 'Software Devlopment',
      description1:'by Coding Club',
      description2:'Deadline : 24/2/2025',
      buttonText:'Register',
      icon: Icon,
    },
    
  ]
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Header/>
      <div className="cards-grid">
        {pscard.map((card,index) => (
          <Cards
          key={index}
          title = {card.title}
          icon = {card.icon}
          description = {card.description}
          buttonText = {card.buttonText}
          />
        ))}
      </div>
      <Heading/>
      <div className="card-grid">
        {mpcard.map((card,index) => (
          <Card1
          key={index}
          title = {card.title}
          icon = {card.icon}
          description1 = {card.description1}
          description2 = {card.description2}
          buttonText = {card.buttonText}
          />
        ))}
      </div>
 


    </div>
  );
}

export default App;