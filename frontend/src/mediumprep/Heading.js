import React from "react";
import "./Heading.css";
import Ps from '../assets/PS CARD ICON.png';

const Heading = ({ title, icon }) => { // Correctly destructure props from an object
    return (
        <div className="heading">
            <div className="heading-content">
                <img src={icon} className='ps' alt="no_preview" />
                <h1>{title}</h1>
            </div>
          <div className="headingp">
            <p>In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.</p>
          </div>
        </div>
    );
};

export default Heading;
