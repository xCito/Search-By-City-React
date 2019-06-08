import React from 'react';        // npm package
import ReactDOM from 'react-dom'; // npm package
import './index.css';             // "link" the css to apply style
import App from './App';          // import the App Component from App.js

// Find the elem with id 'root', and insert JSX into 
// it from the App Component
ReactDOM.render(<App />, document.getElementById('root'));
