import React from 'react';
import './App.css';
export default class App extends React.Component {
  render() {
    const { Error, Client, Patient, Data } = this.props;

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

    if (Error) console.error(Error);
    if (Client) console.log('Client: ', Client);
    if (Patient) console.log('Patient: ', Patient);
    if (Data) console.log('Data: ', Data);
    if (ID) console.log('ID: ', ID);
    if (Name) console.log('Name: ', Name);
    if (Address) console.log('Address: ', Address);

    return (
      <div className="App">
        <h1>Patient Info</h1>
        <h4>{ID.value || 'n/a'}</h4>
        <br></br>
        <h2>{Name.text || 'n/a'}</h2>
        <h4>{Patient.gender || 'n/a'}</h4>
        <h3>{Patient.birthDate || 'n/a'}</h3>
        <br></br>
        <h3>{Address.line[0]}</h3>
        <h3>
          {Address.city}, {Address.state}, {Address.postalCode}
        </h3>
      </div>
    );
  }
}
