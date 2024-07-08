import React from "react";
import PropTypes from "prop-types";

import "./Lesson2.css";

const AlertMultiClasses = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];
  if (outlined) classNames.push("is-outlined");
  if (elevated) classNames.push("is-elevated");

  return <p className={classNames.join(" ")}>{children}</p>;
};

AlertMultiClasses.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};

export default AlertMultiClasses;
