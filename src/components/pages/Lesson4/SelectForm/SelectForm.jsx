import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

import styles from './SelectForm.module.css';

// Folosim Enumerable pentru a evita antipattern-ul "magic strings"

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class SelectForm extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  loginInputId = nanoid();
  emailInputId = nanoid();
  passwordInputId = nanoid();
  radioLabelMaleInputId = nanoid();
  radioLabelFemaleInputId = nanoid();
  ageSelectInputId = nanoid();

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

  handleGenderChange = e => {
    // const radioValue = e.target.value;
    // console.log(radioValue);

    // const radioName = e.target.name;
    // console.log(radioName);

    const { name, value, type, checked } = e.target;

    // Dacă elementul este un checkbox,
    // atunci vom lua valoarea din atributul checked,
    // în caz contrar, din atributul value
    this.setState({ [name]: type === 'checkbox' ? checked : value });

    // this.setState({ ...this.state, [name]: value });
    // console.log(this.state);
  };

  handleAgeChange = ev => {
    const { name, value, type } = ev.target;
    console.log(name);
    console.log(value);
    console.log(type);

    // Dacă elementul este un checkbox,
    // atunci vom lua valoarea din atributul checked,
    // în caz contrar, din atributul value
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

    const { login, email, password, gender, age, agreed } = this.state;

    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, gender: ${gender}, Agreed: ${agreed}`
    );

    this.props.onSubmit({ login, email, password, gender, age, agreed });

    //   Gresit !!!
    form.reset();
  };
  render() {
    const { login, email, password, agreed, gender, age } = this.state;

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

        <section>
          <h2>Choose your gender</h2>
          <label
            className={styles.radioLabel}
            htmlFor={this.radioLabelMaleInputId}
            name="radioLabel"
          >
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleGenderChange}
            />
          </label>
          <label
            className={styles.radioLabel}
            htmlFor={this.radioLabelFemaleInputId}
            name="radioLabel"
          >
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleGenderChange}
            />
          </label>
        </section>

        <label className={styles.ageLabel}>
          Choose your age
          <select
            className={styles.ageSelect}
            name="age"
            value={age}
            onChange={this.handleAgeChange}
          >
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
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
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default SelectForm;
