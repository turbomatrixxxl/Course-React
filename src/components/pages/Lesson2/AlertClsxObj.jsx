import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./Lesson2.css";

const AlertClsxObj = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}>
      {children}
    </p>
  );
};

AlertClsxObj.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};

export default AlertClsxObj;
