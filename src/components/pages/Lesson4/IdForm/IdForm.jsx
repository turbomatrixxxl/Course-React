import React from 'react';

// Putem folosi orice pachet pentru a genera șiruri (string-uri) unice
import { nanoid } from 'nanoid';

import styles from './IdForm.module.css';

class IdForm extends React.Component {
  state = {
    cucu: 'bau',
    login: '',
  };

  loginInputId = nanoid();

  handleChange = e => {
    const value = e.target.value;
    this.setState({ ...this.state, login: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(`ev.currentTarget = ${ev.currentTarget}`);
    console.log(`ev.target = ${ev.target}`);
    console.log(`this.state.login = ${this.state}`);

    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { radu } = { ...this.state.cucu };
    // console.log(this.loginInputId);

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor={this.loginInputId}>
            Login
          </label>
          <input
            className={styles.input}
            type="text"
            name="login"
            id={this.loginInputId}
            onChange={this.handleChange}
          />
        </div>

        <button className={styles.submitButton} type="submit">
          Sign up as{' '}
          {`this.state.login = ${this.state.login} and this.state = ${radu}`}
        </button>
      </form>
    );
  }
}

export default IdForm;
