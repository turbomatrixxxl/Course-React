import React, { Component } from 'react';

class Anonymous extends Component {
  static defaultProps = {
    step: 1,
    value: 0,
  };

  render() {
    const { step } = this.props;
    const { value } = this.props;

    return (
      <div style={{ display: 'flex', gap: '5px' }}>
        <span
          style={{
            marginRight: '10px',
          }}
        >
          {value - step}
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
          onClick={evt => {
            console.log('Increment button was clicked!', evt); // funcționează
            console.log('this.props: ', this.props); // funcționează
          }}
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
          onClick={evt => {
            console.log('Decrement button was clicked!', evt); // funcționează
            console.log('this.props: ', this.props); // funcționează
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Anonymous;
