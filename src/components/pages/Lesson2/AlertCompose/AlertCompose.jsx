import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./AlertCompose.module.css";

const AlertCompose = ({ variant, children }) => {
  const nameClass = clsx(
    variant === undefined ? styles.alert : styles[variant]
  );

  // console.log(variant);
  // console.log(styles.alert);

  return <p className={nameClass}>{children}</p>;
};

AlertCompose.propTypes = {
  variant: PropTypes.string,
};

export default AlertCompose;
