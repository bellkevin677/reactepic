import React from 'react';
import { oauth2 as SMART } from 'fhirclient';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

SMART.init({
  iss: "",
  redirectUri: "",
  clientId: "",
  scope: "launch/patient offline_access openid fhirUser",
}).then(client => {
  return Promise.all([
    client,
    client.patient.read(),
    client.request(`/Observation?patient=${client.patient.id}`, {
        pageLimit: 0,
        flat: true
    })
  ]);
}).then(([client, patient, data]) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        Client={client}
        Patient={patient}
        Data={data}
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