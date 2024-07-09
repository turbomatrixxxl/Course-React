import React from 'react';
import { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <button
          style={{
            marginRight: '10px',
            background: 'blue',
            color: 'white',
            padding: '30px',
            fontSize: '20px',
          }}
          type="button"
          onClick={this.show}
        >
          Show
        </button>
        <button
          style={{
            background: 'red',
            color: 'white',
            padding: '30px',
            fontSize: '20px',
          }}
          type="button"
          onClick={this.hide}
        >
          Hide
        </button>
        {isOpen && children}
      </div>
    );
  }
}

export default Toggle;
