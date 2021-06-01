import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    const {
      Error,
      Client,
      Patient,
      Data
    } = this.props;

    if (Error) console.error(Error);
    if (Client) console.log("Client: ", Client);
    if (Patient) console.log("Patient: ", Patient);
    if (Data) console.log("Data: ", Data);

    return <div className="App">
      {Error ? <h1>Error</h1> : <h1>Success</h1>}
    </div>
  } 
}
