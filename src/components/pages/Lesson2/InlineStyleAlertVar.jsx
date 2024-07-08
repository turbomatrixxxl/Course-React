import React from "react";

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      return "gray";
  }
};

const Alert = ({ variant, children }) => {
  return (
    <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
      {children}
    </p>
  );
};

export default Alert;
