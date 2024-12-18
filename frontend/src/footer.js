import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './footer.css';


const Footer = ({ userLoggedIn,  setUserLoggedIn }) => {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
      };
      const downloadGuidelines = () => {
        const link = document.createElement("a");
        link.href = "/assets/guidelines.pdf";
        link.download = "Guidelines.pdf";
        link.click();
      };
    const handleLogout = () => {
        localStorage.removeItem("userToken");  // Assuming the token is saved under the key "userToken"
    
        // Optionally, if you store admin tokens separately, keep that in localStorage or session as required
        // localStorage.removeItem("adminToken");
      
        // Update login state
        setUserLoggedIn(false);
      
        // Alert the user about successful logout
        alert("You have been logged out.");
      
        // Navigate to the homepage after logout
        navigate("/");
      };
  return (
    <footer className="footer-content">
      <div className="left-content">
        <div className="left-top">
          <div className="kriti">
            <div className="k">Kriti</div>
            <div className="ed">
              <div>13th</div> <div>Edition</div>
            </div>
          </div>
          {userLoggedIn  ? (
            <button className="nav-login-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="nav-login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
        <div className="left-bottom">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16">
              <path
                fill="#fff"
                d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="right-content">
        <ul className="footer-links">
          <a href="announcements">Announcements</a>
          <a href="#faq">FAQ</a>
          <a href="#problem-statements">Problem Statements</a>
          <div className="nav-item" onClick={downloadGuidelines}>
            Guidelines
          </div>
          <a href="mailto:contact@kriti.com">Contact Us</a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;