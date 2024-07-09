import React, { Component } from 'react';

class InternalState extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // funcționează
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // funcționează
    console.log('this.props: ', this.props); // Error: cannot read props of undefined
  };

  render() {
    const { step } = this.props;

    return (
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <span
          style={{
            marginRight: '10px',
          }}
        >
          {this.state.value}
        </span>
        <button
          style={{
            marginRight: '10px',
            background: 'blue',
            color: 'white',
            padding: '30px',
            fontSize: '20px',
          }}
          type="button"
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </button>
        <button
          style={{
            background: 'red',
            color: 'white',
            padding: '30px',
            fontSize: '20px',
          }}
          type="button"
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default InternalState;
