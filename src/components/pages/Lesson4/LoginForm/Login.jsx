import { Component } from 'react';

import styles from './Login.module.css';
import clsx from 'clsx';

class LoginForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(form);

    const login = form.elements.login.value;

    const password = form.elements.password.value;

    console.log(login, password);

    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} type="text" name="login" />
        <input
          className={clsx(styles.input, styles.password)}
          type="password"
          name="password"
        />
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
