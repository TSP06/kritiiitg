import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Kritilogo from "./assets/Kritilogo.png";
import "./Navbar.css";

function Navbar({ userLoggedIn, setUserLoggedIn, pendingSection, setPendingSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUserLoggedIn(false);
    alert("You have been logged out.");
    navigate("/");
  };

  const downloadGuidelines = () => {
    const link = document.createElement("a");
    link.href = "/assets/guidelines.pdf";
    link.download = "Guidelines.pdf";
    link.click();
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
    <nav className="navbar">
      <div className="navbar-content">
        <img
          src={Kritilogo}
          alt="logo"
          className="nav-logo"
          onClick={() => navigate("/")}
        />
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className={`nav-element ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-item" onClick={() => handleNavigation("announcement")}>
            Announcements
          </div>
          <div className="nav-item" onClick={downloadGuidelines}>
            Guidelines
          </div>
          <div className="nav-item" onClick={() => handleNavigation("problem-statements")}>
            Problem Statements
          </div>
          <div  className="nav-item" id="discord">
          <a href="">Discord</a>  
          </div>
          <div className="faqt" onClick={() => handleNavigation("faqs")}>
            FAQs
          </div>
          {userLoggedIn ? (
            <button className="nav-login-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="nav-login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
