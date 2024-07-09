import React from 'react';
import { Component } from 'react';

class ToggleState extends Component {
  state = { isOpen: false };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          style={
            !isOpen
              ? {
                  marginRight: '10px',
                  background: 'blue',
                  color: 'white',
                  padding: '30px',
                  fontSize: '20px',
                }
              : {
                  marginRight: '10px',
                  background: 'red',
                  color: 'white',
                  padding: '30px',
                  fontSize: '20px',
                }
          }
          type="button"
          onClick={this.toggle}
        >
          {isOpen ? 'Hide' : 'Show'}
        </button>

        {isOpen && (
          <p
            style={{
              alignItems: 'center',
              background: 'blueviolet',
              color: 'white',
              display: 'flex',
              flexGrow: 1,
              padding: '30px',
              justifyContent: 'center',
              fontSize: '20px',
              margin: 0,
            }}
          >
            {children}
          </p>
        )}
      </div>
    );
  }
}

export default ToggleState;
