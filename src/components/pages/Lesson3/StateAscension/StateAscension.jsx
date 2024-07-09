import React from 'react';
import { Component } from 'react';

// Button primește funcția changeMessage (numele la props),
// care este apelată la evenimentul onClick
const Button = ({ changeMessage, label }) => (
  <button
    style={{
      background: 'blue',
      color: 'white',
      padding: '30px',
      fontSize: '20px',
    }}
    type="button"
    onClick={changeMessage}
  >
    {label}
  </button>
);

class StateAscension extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Metoda pe care o vom transmite spre componenta Button pentru a fi apelată la evenimentul onClick
  updateMessage = evt => {
    console.log(evt); // Putem accesa obiectul evenimentului
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            backgroundColor: 'gray',
            color: 'white',
            padding: '30px',
            fontSize: '20px',
          }}
        >
          {this.state.message}
        </span>
        <Button label="Update time" changeMessage={this.updateMessage} />
      </div>
    );
  }
}

export default StateAscension;
