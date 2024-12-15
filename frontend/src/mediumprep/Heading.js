import React from "react";
import "./Heading.css";
import Ps from '../assets/PS CARD ICON.png';
const Heading = () => {
    return (
        <div className="heading">
            <div className="heading-content">
                <img src={Ps} className='ps' alt="no_preview" />
                <h1>Medium Prep</h1>
            </div>
            <p>In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.</p>
        </div>
    );
};

export default Heading;