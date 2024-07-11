import { Component } from 'react';

import styles from './SetStateForm.module.css';

class SetStateForm extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
    console.log(this.state);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={this.handleChange}
      />
    );
  }
}

export default SetStateForm;
