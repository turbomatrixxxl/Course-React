import { Component } from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

import styles from './Checkbox.module.css';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

class Checkbox extends Component {
  state = {
    ...INITIAL_STATE,
  };

  loginInputId = nanoid();
  emailInputId = nanoid();
  passwordInputId = nanoid();

  handleCheckboxChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Dacă elementul este un checkbox,
    // atunci vom lua valoarea din atributul checked,
    // în caz contrar, din atributul value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    // console.log(e.target.name);

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(form);

    const inputLogin = form.elements.login.value;
    console.log(inputLogin);

    const emailLogin = form.elements.email.value;
    console.log(emailLogin);

    const passwordLogin = form.elements.password.value;
    console.log(passwordLogin);

    const button = form.elements.button;
    console.log(button);

    const { login, email, password, agreed } = this.state;

    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    this.props.onSubmit({ login, email, password, agreed });

    //   Gresit !!!
    // form.reset();
  };

  render() {
    const { login, email, password, agreed } = this.state;

    // console.log(this.loginInputId);
    // console.log(this.emailInputId);
    // console.log(this.passwordInputId);

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label
          className={styles.label}
          htmlFor={this.loginInputId}
          name="login"
        >
          <div>
            Name<span className={styles.requiredIcon}>*</span>
          </div>
          <input
            onChange={this.handleInputChange}
            className={styles.input}
            type="text"
            value={login}
            name="login"
          />
        </label>

        <label
          className={styles.label}
          htmlFor={this.emailInputId}
          name="email"
        >
          <div>
            Email<span className={styles.requiredIcon}>*</span>
          </div>

          <input
            onChange={this.handleInputChange}
            className={styles.input}
            type="email"
            value={email}
            name="email"
          />
        </label>

        <label
          className={styles.label}
          htmlFor={this.passwordInputId}
          name="password"
        >
          <div>
            Password<span className={styles.requiredIcon}>*</span>
          </div>

          <input
            onChange={this.handleInputChange}
            className={clsx(styles.input, styles.password)}
            type="password"
            value={password}
            name="password"
          />
        </label>

        <label className={styles.labelCheck}>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleCheckboxChange}
          />
        </label>

        <button
          className={styles.submitButton}
          name="button"
          type="submit"
          disabled={!agreed}
        >
          Login as {login}
        </button>
      </form>
    );
  }
}

export default Checkbox;
