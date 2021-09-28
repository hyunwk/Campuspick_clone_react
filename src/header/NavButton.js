import React from "react";

const NavButton = ({ href, children, current }) => {
  const linkStyle = {
    margin: "0 8px",
    textDecoration: "none",
    color: current ? "#ff0" : "#fff",
    borderBottom: current ? "2px solid #ff0" : "none",
    fontWeight: "bold",
  };
  return (
    <a style={linkStyle} href={href}>
      {children}
    </a>
  );
};

export default NavButton;
