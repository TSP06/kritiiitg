import React, { useEffect, useState } from 'react';
import './prep.css'; // Style the cards in this CSS file
import Card from './mediumprep/Card1'; // Assuming you have a Card component that renders the individual card structure
import Heading from './mediumprep/Heading';
import image2 from './assets/noprep.png';
import { client } from './sanityClient'; // Import your sanity client

// MPCards component to fetch and display data dynamically
const MPCards = ({ userLoggedIn }) => {
  const [problemStatements, setProblemStatements] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const query = `*[_type == "announcement"] | order(_createdAt desc) {
        date,
        content
      }`;
      try {
        const data = await client.fetch(query);
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  // Fetch problem statements
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
    (ps) => ps.category === 'no_prep'
  );

  const title = 'No Prep';

  const para1 = `The No Prep category is tailored for impromptu problem-solving, emphasizing quick thinking and adaptability. With minimal prior preparation required, these challenges test participants' ability to innovate and execute on the spot. Details include:`
  const list = `
    <div><strong>Points:</strong> 150</div>
    <div><strong>Team Size:</strong> 2</div>
    <div><strong>Time to Solve:</strong> NA </div>
  `
  
  const para2 = `  High Prep problem statements are a perfect opportunity for teams to push their boundaries and showcase their ability 
    to tackle intensive projects.`
  

  return (
    <div className="preppage">
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
              category="noprep"
              submittingLink={card.submittingLink}
              pdfFile={card.pdfFile?.asset?.url} // Send the URL for the PDF file
              readyToSubmit={card.readyToSubmit}
            />
          ))
        ) : (
          <p>No "No Prep" problem statements found.</p>
        )}
      </div>
    </div>
  );
};

export default MPCards;
