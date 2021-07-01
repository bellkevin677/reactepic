import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import {
  Table,
  Card,
  ListGroup
} from 'react-bootstrap';

export default class App extends React.Component {
  render() {

    const {
      Error,
      Client,
      Patient,
      Data,
      medicationStatement,
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

    // Original Code (Kevin)
    // let medname = 
    //     medicationStatement.entry.find((arrayRecord) => arrayRecord.use) || medicationStatement.entry[0];

    // Code from Andrew
    // let Medname =
    // medicationStatement.entry[0].resource.medicationCodeableConcept.text;
    // console.log(Medname);


    return <div >
      <h1>My Health Access</h1>
      <br></br>
      <div class="Card">
        <Card style={{ width: '500px' }} className="d-flex justify-content-center align-items-center" border="primary">
          <Table striped bordered hover size="sm" bg="light">
            <thead>
              <tr>
                <th >Patient Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >Patient ID:</td>
                <td>{ID.value || "n/a"}</td>
              </tr>
              <tr>
                <td>Patient Name:</td>
                <td>{Name.text || "n/a"}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td> {Patient.gender || "n/a"}</td>
              </tr>
              <tr>
                <td>Birthday:</td>
                <td> {Patient.birthDate || "n/a"}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td> {Address.line[0] || "n/a"}, {Address.city}, {Address.state}, {Address.postalCode}</td>
                {/* <td> {Address.city}, {Address.state}, {Address.postalCode}</td> */}
              </tr>
              {/* <tr>
                <td>Medication Statement:</td>
                <td> {medname}</td>
                </tr> */}
            </tbody>
          </Table>
        </Card>
      </div>
    </div >
  }
}

// Original Code (Kevin)
{/* <h1>Patient Info</h1>
      <h4>Patient ID: {ID.value || "n/a"}</h4> */}
{/* <br></br>
      <h2>Patient Name: {Name.text || "n/a"}</h2> */}
{/* <h4>Gender: {Patient.gender || "n/a"}</h4> */ }
{/* <h3>Birthday: {Patient.birthDate || "n/a"}</h3> */ }
{/* <br></br> */ }
{/* <h3>Address:</h3> */ }
{/* <h3> {Address.line[0] || "n/a"}</h3>
      <h3>{Address.city}, {Address.state}, {Address.postalCode}</h3>
      <br></br>
      <br></br> */}
{/* <h1>Medication Statement</h1>
      <h2>{medname.resource.medicationCodeableConcept || "n/a"}</h2> */}
