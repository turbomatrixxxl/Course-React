import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./Alert.module.css";

// Obținem un obiect care se potrivește cu numele clasei
// console.log(styles); // { alert: "Alert_alert_ax7yz" }

const AlertModuleCss = ({ variant, children }) => {
  // console.log(styles);

  // Accesăm proprietatea obiectului prin numele clasei din fișierul modulului nostru
  return <p className={clsx(styles.alert, styles[variant])}>{children}</p>;
};

AlertModuleCss.propTypes = {
  elevated: PropTypes.bool,
};

export default AlertModuleCss;
