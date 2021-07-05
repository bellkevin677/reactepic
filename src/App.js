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

    // Code from Andrew
    // let Medname =
    // medicationRequest.entry[0].resource;
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
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div >
  }
}

