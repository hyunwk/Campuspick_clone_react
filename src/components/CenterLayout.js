import React from "react";
import "../styles/wrap.scss";
const CenterLayout = ({ children }) => {
  return <div className="wrap flex align-default">{children}</div>;
};

export default CenterLayout;
