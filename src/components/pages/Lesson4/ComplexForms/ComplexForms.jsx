import { Component } from 'react';

import styles from './ComplexForms.module.css';

class SignUpForm extends Component {
  state = {
    login: '',
  };

  // Răspunde de actualizarea state-ului
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Este apelat la trimiterea formularului
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Props ce este transmis formularului care urmează să fie apelat la submit
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.submitButton} type="submit">
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SignUpForm;
