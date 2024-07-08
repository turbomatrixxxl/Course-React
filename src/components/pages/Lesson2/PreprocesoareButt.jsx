import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Lesson2.css";

// Button.js
const Button = ({ variant, children }) => {
  // Stiluri de bază pentru un buton cu mai multe variante de randare
  return <button className={clsx("button", variant)}>{children}</button>;
};

// LoginButton.js
const LoginButton = () => {
  // O logică unică pentru butonul de autentificare
  return <Button variant="primary">Login</Button>;
};

// FollowButton.js
const FollowButton = () => {
  // O logică unică pentru butonul de abonare
  return <Button variant="secondary">Follow</Button>;
};

Button.propTypes = {
  variant: PropTypes.string,
};

export default function Buttons() {
  return (
    <div className="button">
      <LoginButton />
      <FollowButton />
    </div>
  );
}
