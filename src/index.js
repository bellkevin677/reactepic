import React from 'react';
import { oauth2 as SMART } from 'fhirclient';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

SMART.init({
  iss: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/DSTU2/",
  redirectUri: "http://localhost:3000",
  clientId: "593798c6-39ad-4ff6-813a-7cc4fd0e74d4",
  scope: "patient/*.read online_access",
}).then(client => {
  return ([
    client.patient.read()
  ]);
}).then(([patient]) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        Patient={patient}
      />
    </React.StrictMode>
  , root);
}, err => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        Error={err}
      />
    </React.StrictMode>
  , root);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();