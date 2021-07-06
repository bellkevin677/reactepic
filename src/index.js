import React from 'react';
import { client, oauth2 as SMART } from 'fhirclient';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

console.log(client);

SMART.init({
  iss: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/',
  redirectUri: 'http://localhost:3000',
  clientId: '593798c6-39ad-4ff6-813a-7cc4fd0e74d4',
  scope:
    'openid fhirUser patient/*.* MedicationRequest/*.* RelatedPerson/*.* online_access',
}).then(
  async (client) => {
    const patient = await client.patient.read();

    const medicationRequest = await client.request(
      `/MedicationRequest?patient=${patient.id}`
    );
    console.log('medicationRequest', medicationRequest);

    // const related = await client.request(`/RelatedPerson?patient=${patient.id}`)
    // console.log ("related", related)

    // const famHistory = await client.request(`/FamilyMemberHistory?patient=${patient.id}`)
    // console.log ("famHistory", famHistory)

    ReactDOM.render(
      <React.StrictMode>
        <App
          patient={patient}
          medications={medicationRequest.entry}
          // condition={condition}
          // related={related}
          // famHistory={famHistory}
        />
      </React.StrictMode>,
      root
    );
  },
  (err) => {
    ReactDOM.render(
      <React.StrictMode>
        <App Error={err} />
      </React.StrictMode>,
      root
    );
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();