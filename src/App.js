import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { Table, Card, ListGroup } from 'react-bootstrap';

export default function App(props) {
  const {
    Error,
    Client,
    patient,
    Data,
    medications = [],
    // condition,
    // related,
    // famHistory
  } = props;

  let name =
    patient.name.find((arrayRecord) => arrayRecord.use === 'official') ||
    patient.name;

  let identifier =
    patient.identifier.find((arrayRecord) => arrayRecord.use === 'official') ||
    patient.identifier[0];

  let address =
    patient.address.find((arrayRecord) => arrayRecord.use === 'official') ||
    patient.address[0];

  console.log(medications);

  return (
    <div>
      <h1>My Health Access</h1>
      <br></br>
      <div class="Card">
        <Card
          style={{ width: '500px' }}
          className="d-flex justify-content-center align-items-center"
          border="primary"
        >
          <Table striped bordered hover size="sm" bg="light">
            <thead>
              <tr>
                <th>Patient Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Patient ID:</td>
                <td>{identifier.value || 'n/a'}</td>
              </tr>
              <tr>
                <td>Patient Name:</td>
                <td>{name.text || 'n/a'}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td> {patient.gender || 'n/a'}</td>
              </tr>
              <tr>
                <td>Birthday:</td>
                <td> {patient.birthDate || 'n/a'}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  {address.line[0] || 'n/a'}, {address.city}, {address.state},{' '}
                  {address.postalCode}
                </td>
              </tr>
              {/* This row is if I were doing "dummy" data to work on the UI */}
              <tr>
                <td>Medications:</td>
                <td>
                  <ul>
                    <li>Statin</li>
                    <li>Antibiotics</li>
                  </ul>
                </td>
              </tr>
              {/* This row is if I were using real data to create a list of medication */}
              <tr>
                <td>Medications:</td>
                <td>
                  <ul>
                    {medications.map((med, idx) => {
                      const resource = med.resource;
                      const reference = resource.medicationReference;
                      const dosageInstruction =
                        resource.dosageInstruction &&
                        resource.dosageInstruction[0];

                      if (!reference || !dosageInstruction) {
                        return null;
                      }
                      const { display = '' } = reference || {};
                      return (
                        <li
                          key={idx}
                        >{`${display} - ${dosageInstruction.timing.code.text}`}</li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
}

