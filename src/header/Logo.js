import React from "react";
import logo from "../images/logo.desktop.png";

const Logo = () => {
  return <a href="/" style={{ backgroundImage: `url(${logo})`, width: "122px", height: "46px", fontSize: 0, backgroundSize: 'cover' }}>
  캠퍼스픽 - 대학생 SNS
</a>;
};

export default Logo;
