import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Kritilogo from "./assets/Kritilogo.png";
import "./Navbar.css";

function Navbar({ userLoggedIn, adminLoggedIn, setUserLoggedIn, setAdminLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
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

  const downloadGuidelines = () => {
    const link = document.createElement("a");
    link.href = "/assets/guidelines.pdf";
    link.download = "Guidelines.pdf";
    link.click();
  };

  const handleNavigation = (sectionId) => {
    const route = "/"+sectionId;
    console.log(sectionId)
    console.log(route);
    navigate(route)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="top-right-bg"></div>
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
          <div className="nav-item" onClick={() => handleNavigation("faqs")}>
            FAQs
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
      </div>
    </nav>
  );
}

export default Navbar;
