import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Card1.css';

const Card = ({
  title,
  description1,
  description2,
  buttonText,
  icon,
  userLoggedIn,
  category,
  submittingLink,
  pdfFile,
  readyToSubmit
}) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to format the deadline
  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options); // Formats date in "Month Day, Year"
    
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions); // Formats time in "hh:mm AM/PM"
  
    return `${formattedDate}, ${formattedTime}`; // Combines date and time
  };
  

  // Handle button click to navigate to register page with PS name and category
  const handleButtonClick = () => {
    navigate(`/register/${title}/${category}`);
  };

  // Handle the PDF download when the icon is clicked
  const handlePdfDownload = () => {
    if (pdfFile) {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = true;
      link.click();
    }
  };

  // Handle redirection for the 'Submit' button
  const handleSubmitClick = () => {
    if (readyToSubmit && submittingLink) {
      window.location.href = submittingLink; // Redirect to the submitting link
    }
  };

  return (
    <div className="card1">
      <div className="card1top">
        <h2>{title}</h2>
        <button className="card1btnicon" >
          <a href={pdfFile} target="_blank" rel="noopener noreferrer" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
              />
            </svg>
          </a> 
        </button>
      </div>
      <p>{description1}</p>
      <p>{description2 && description2.includes('Deadline:')
          ? description2.replace(
              /Deadline: .*/,
              `Deadline: ${formatDeadline(description2.split(': ')[1])}`
            )
          : description2
      }</p>

      {/* Show button text only if user is logged in */}
      {userLoggedIn ? (
        <button className="card-button1" onClick={readyToSubmit ? handleSubmitClick : handleButtonClick}>
          {readyToSubmit ? 'Submit' : buttonText}
        </button>
      ) : (
        null // Don't render anything if not logged in
      )}
    </div>
  );
};

export default Card;
