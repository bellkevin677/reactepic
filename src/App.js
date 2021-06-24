import React from 'react';
import './App.css';
export default class App extends React.Component {
  render() {

    const {
      Error,
      Client,
      Patient,
      Data,
      // medicationStatment,
      // condition,
      // related,
      // famHistory
    } = this.props;




    let Name =
      Patient.name.find((arrayRecord) => arrayRecord.use === 'official') ||
      Patient.name;

    let ID =
      Patient.identifier.find(
        (arrayRecord) => arrayRecord.use === 'official'
      ) || Patient.identifier[0];

    let Address =
      Patient.address.find((arrayRecord) => arrayRecord.use === 'official') ||
      Patient.address[0];


    return <div className="App">
      <h1>Patient Info</h1>
      <h4>{ID.value || "n/a"}</h4>
      <br></br>
      <h2>{Name.text || "n/a"}</h2>
      <h4>{Patient.gender || "n/a"}</h4>
      <h3>{Patient.birthDate || "n/a"}</h3>
      <br></br>
      <h3>{Address.line[0] || "n/a"}</h3>
      <h3>{Address.city}, {Address.state}, {Address.postalCode}</h3>
      
    </div>
  } 
}
