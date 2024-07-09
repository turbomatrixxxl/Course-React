import React, { Component } from 'react';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    value: 0,
  };

  render() {
    const { step } = this.props;
    const { value } = this.props;

    return (
      <div>
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
          onClick={event => {
            console.log({ value });
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
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
