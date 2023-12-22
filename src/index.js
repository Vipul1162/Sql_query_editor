// Importing necessary modules from React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main styles for the application
import './index.css';

// Importing the main App component which serves as the root component of the application
import App from './App';

// Creating a root for React to attach the main App component to a DOM element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the main App component inside the root, wrapped inside <React.StrictMode> for enhanced development mode checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
