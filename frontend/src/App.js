import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Footer from './footer';
import Login from './login';
import AdminLoginForm from './adminlogin';
import AdminPage from './admin';
import PsPage from './pspage';
import Announcement from './Announcement';
import FAQ from './faq';
import LowPsPage from './lowps';
import HighPsPage from './highps';
import NoPrepPsPage from './noprep';
import MidPsPage from './mid';
import { useInView } from "react-intersection-observer";
import Register from './register';
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [currentSection, setCurrentSection] = useState('/');

  const sectionRouteMap = [
    { id: "about", route: "/", Component: About },
    { id: "announcement", route: "/announcement", Component: Announcement },
    { id: "problem-statements", route: "/pspage", Component: PsPage },
    { id: "faq", route: "/faq", Component: FAQ },
  ];

  useEffect(() => {
    const observerCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const visibleRoute = sectionRouteMap.find((section) => section.id === entry.target.id)?.route;
          if (visibleRoute && visibleRoute !== currentSection) {
            setCurrentSection(visibleRoute);
            window.history.replaceState(null, "", visibleRoute); // Update the URL without refreshing
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.6 }); // 60% visibility
    sectionRouteMap.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentSection]);

  return (
    <div className="App">
      <Router>
        <Navbar
          userLoggedIn={userLoggedIn}
          adminLoggedIn={adminLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          setAdminLoggedIn={setAdminLoggedIn}
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
                adminLoggedIn={adminLoggedIn}
                setAdminLoggedIn={setAdminLoggedIn}
              />
            }
          />


          {/* User Routes */}

          <Route path="/register/:title/:category" element={<Register  />} />
          <Route
            path="/login"
            element={
              <Login
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
              />
            }
          />

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
                <div id="pspage">
                  <PsPage />
                </div>
                <div id="faq">
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

        <Footer userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </Router>
    </div>
  );
}

export default App;
