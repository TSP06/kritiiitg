import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your main App component

function Root() {
    return (
        <Router>
            <App /> 
        </Router>
    );
}

export default Root;