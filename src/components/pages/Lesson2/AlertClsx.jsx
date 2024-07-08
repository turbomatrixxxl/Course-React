import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./Lesson2.css";

const AlertClsx = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}>
      {children}
    </p>
  );
};

AlertClsx.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};

export default AlertClsx;
