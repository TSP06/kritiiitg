import React from "react";
import "./Heading.css";
import Ps from '../assets/PS CARD ICON.png';

const Heading = ({ title, icon, para1, para2, list }) => { // Correctly destructure props from an object
  return (
    <div className="heading">
      <div className="heading-content">
        <img src={icon} className='ps' alt="no_preview" />
        <h1>{title}</h1>
      </div>
      <div className="headingp">
        <p>{para1}</p>
        <div className="paralist" dangerouslySetInnerHTML={{ __html: list }} />
        <p>{para2}</p>
      </div>
    </div>
  );
};

export default Heading;
