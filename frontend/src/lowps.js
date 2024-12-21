// MPCards.js
import React from 'react';
import {useState,useEffect} from 'react';
import './prep.css'; // Style the cards in this CSS file
import Card from './mediumprep/Card1'; // Assuming you have a Card component that renders the individual card structure
import Heading from './mediumprep/Heading'
import image2 from './assets/lowprep.png'
import { client } from './sanityClient';
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


  const [problemStatements, setProblemStatements] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const title = "Low Prep";
  const para1 = `The Low Prep category offers problem statements designed to be approachable yet stimulating. These challenges are ideal for participants with limited preparation time or those new to competitive problem-solving. Key details of this category:`
 const list = `
  <div><strong>Points:</strong> 400</div>
  <div><strong>Team Size:</strong> 4</div>
  <div><strong>Time to Solve:</strong> 1-2 weeks (varies depending on the specific problem statement)</div>
`

 const para2 = ` High Prep problem statements are a perfect opportunity for teams to push their boundaries and showcase their ability 
  to tackle intensive projects.`


  useEffect(() => {
    const fetchProblemStatements = async () => {
      const query = `*[_type == "problemstatement"] | order(_createdAt desc) {
        id,
        title,
        deadline,
        category,
        postedBy,
        pdfFile { asset->{url} },  // Get the pdf URL
        readyToSubmit,
        submittingLink
      }`;
      try {
        const data = await client.fetch(query);
        setProblemStatements(data);
      } catch (error) {
        console.error('Error fetching problem statements:', error);
      }
    };
  
    fetchProblemStatements();
  }, []);
  
  // When both data have been fetched, set loading to false
  useEffect(() => {
    if (problemStatements.length > 0 && announcements.length > 0) {
      setLoading(false);
    }
  }, [problemStatements, announcements]);
  
  if (error) return <div>{error}</div>;
  
  // Filter out the problem statements with category 'No Prep'
  const filteredProblemStatements = problemStatements.filter(
    (ps) => ps.category === 'low_prep'
  );
  
  return (
<div className = "preppage">
    <Heading title={title} icon={image2} para1={para1} list={list} para2={para2}/>
    <div className="mp-cards-container">
    {filteredProblemStatements.length > 0 ? (
          filteredProblemStatements.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description1={`Posted by: ${card.postedBy}`}
              description2={`Deadline: ${card.deadline}`}
              buttonText={card.readyToSubmit ? 'Submit' : 'Register'}
              icon={card.icon}
              userLoggedIn={userLoggedIn}
              category="lowprep"
              submittingLink={card.submittingLink}
              pdfFile={card.pdfFile?.asset?.url} // Send the URL for the PDF file
              readyToSubmit={card.readyToSubmit}
            />
          ))
        ) : (
         <div></div>
        )}
    </div>
    </div>
  );
};

export default MPCards;
