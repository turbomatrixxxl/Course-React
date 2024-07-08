import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import css from "./ClsxModule.module.css";

const ClsxModule = ({ variant, outlined, elevated, children }) => {
  const nameClass = clsx(
    variant === undefined
      ? clsx(css.alert, outlined && css.isOutlined, elevated && css.isElevated)
      : clsx(
          css[variant],
          outlined && css.isOutlined,
          elevated && css.isElevated
        )
  );

  //   console.log(variant === undefined);

  return <p className={nameClass}>{children}</p>;
};

ClsxModule.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool,
  elevated: PropTypes.bool,
};

export default ClsxModule;
