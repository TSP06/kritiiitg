import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './footer.css';

const Footer = ({ userLoggedIn, setUserLoggedIn }) => {
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
        localStorage.removeItem("userToken");
        setUserLoggedIn(false);
        alert("You have been logged out.");
        navigate("/");
    };

    const handleNavigation = (sectionId) => {
      const newUrl = `/#${sectionId}`; // Creating the new URL with the hash
  
      if (window.location.pathname !== '/') {  // If the base path is not '/'
        navigate("/");  // Navigate while replacing the current state.
        window.history.replaceState(null, "","/" );  // Ensure that URL is updated in the browser history.
      } else {
      // If on the home page, just change the hash in the URL.
      }
    
      // Now, make sure to scroll to the element after a small delay to allow routing
      setTimeout(() => {
        scrollToSection(sectionId);  // Scroll smoothly to the section
      }, 300);  // Delay allows React to fully process the route change first
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn(`Element with ID "${sectionId}" not found`);
        }
    };

    // Use effect to handle the page load with a hash fragment
    useEffect(() => {
        const sectionId = window.location.hash.substring(1);  // Extract the section id from the URL
        if (sectionId) {
            scrollToSection(sectionId);  // Scroll to that section when page reloads
        }
    }, []);

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
                    <div className="footeritems" onClick={() => handleNavigation('announcement')}>Announcements</div>
                    <div className="footeritems" onClick={() => handleNavigation('faqs')}>FAQ</div>
                    <div className="footeritems" onClick={() => handleNavigation('problem-statements')}>Problem Statements</div>
                    <div className="footeritems" onClick={downloadGuidelines}>
                        Guidelines
                    </div>
                    <div className="footeritems">
                        <a href="mailto:contact@kriti.com">Contact Us</a>
                    </div>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
