import React, { Component } from 'react';

class CounterFinal extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
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

export default CounterFinal;
