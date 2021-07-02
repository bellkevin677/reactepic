import React from 'react';
import { client, oauth2 as SMART } from 'fhirclient';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');


console.log(client);

SMART.init({
  iss: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/",
  redirectUri: "http://localhost:3000",
  clientId: "593798c6-39ad-4ff6-813a-7cc4fd0e74d4",
  scope: "openid fhirUser patient/*.* MedicationStatement/*.* MedicationRequest/*.* Medication/*.* RelatedPerson/*.* online_access",
})

// Condition.Search FamilyMemberHistory.Search RelatedPerson.Read
  

.then(async (client) => {
  const patient = await client.patient.read()
  console.log (patient)
  console.log (client)

  // const medicationStatement = await client.request(`/MedicationStatement?patient=${patient.id}`)
  // console.log ("medicationStatement", medicationStatement)

  // const related = await client.request(`/RelatedPerson?patient=${patient.id}`)
  // console.log ("related", related)

  const medication = await client.request(`/Medication?patient=${patient.id}`)
  console.log ("medication", medication)

  // const condition = await client.request(`STU3/Condition?subject={subject}&patient=${patient.id}&clinical-status={clinical-status}&category={category}&encounter={encounter}`)
  // console.log ("condition", condition)
  
  // const famHistory = await client.request(`/FamilyMemberHistory?patient={patient.id}&subject={subject}`)
  // console.log ("famHistory", famHistory)



  ReactDOM.render(
    <React.StrictMode>
      <App 
        Patient={patient}
        // medication={medication}
        // condition={condition}
        // related={related}
        // famHistory={famHistory}
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
