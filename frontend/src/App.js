import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./footer";
import Login from "./login";
import AdminLoginForm from "./adminlogin";
import AdminPage from "./admin";
import PsPage from "./pspage";
import Announcement from "./Announcement";
import FAQ from "./faq";
import LowPsPage from "./lowps";
import HighPsPage from "./highps";
import NoPrepPsPage from "./noprep";
import MidPsPage from "./mid";
import Register from "./register";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  // Check login state on app load
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const isAdminLoggedIn = localStorage.getItem("adminToken");

    if (userToken) {
      setUserLoggedIn(true);
    }

    if (isAdminLoggedIn) {
      setAdminLoggedIn(true);
    }
  }, []);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setUserLoggedIn(false);
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setAdminLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          userLoggedIn={userLoggedIn}
          adminLoggedIn={adminLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          setAdminLoggedIn={setAdminLoggedIn}
          handleLogout={handleLogout}
          handleAdminLogout={handleAdminLogout}
        />
        <Routes>
          {/* Admin Routes */}
          <Route
            path="/admin"
            element={<AdminPage userLoggedIn={userLoggedIn} adminLoggedIn={adminLoggedIn} />}
          />
          <Route
            path="/adminlogin"
            element={
              <AdminLoginForm
                userLoggedIn={userLoggedIn}
                setAdminLoggedIn={setAdminLoggedIn}
                adminLoggedIn={adminLoggedIn}
              />
            }
          />

          {/* User Routes */}
          <Route
            path="/login"
            element={
              <Login
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />
          <Route path="/register/:title/:category" element={<Register />} />

          {/* Scrollable Sections */}
          <Route
            path="/"
            element={
              <div>
                <div id="about">
                  <About userLoggedIn={userLoggedIn} adminLoggedIn={adminLoggedIn} />
                </div>
                <div id="announcement">
                  <Announcement />
                </div>
                <div>
                  <PsPage />
                </div>
                <div id="faqs">
                  <FAQ />
                </div>
              </div>
            }
          />

          {/* Additional Pages */}
          <Route path="/highps" element={<HighPsPage userLoggedIn={userLoggedIn} />} />
          <Route path="/midps" element={<MidPsPage userLoggedIn={userLoggedIn} />} />
          <Route path="/lowps" element={<LowPsPage userLoggedIn={userLoggedIn} />} />
          <Route path="/noprepps" element={<NoPrepPsPage userLoggedIn={userLoggedIn} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
