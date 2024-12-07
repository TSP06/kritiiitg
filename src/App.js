import React from 'react'
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './About';
import Navbar from './Navbar'
import unionIcon from './assets/Union.png';
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
    </div>
  );
}

export default App;
