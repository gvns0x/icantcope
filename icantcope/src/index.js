import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Fonts/Pixelcastle-Regular.otf';
import axios from 'axios';
import Airtable from 'airtable'

//create a new Airtable object in React 
new Airtable({apiKey:'pat97nPdNlmslFunC.84de10acc73690f5e2ba99ff58095065b38e6fa1e9a691b14982623c2ee9ac9d'}).base('app546xU983qdu4H0');
//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/app546xU983qdu4H0/map/';
//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'pat97nPdNlmslFunC.84de10acc73690f5e2ba99ff58095065b38e6fa1e9a691b14982623c2ee9ac9d';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
