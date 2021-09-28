import React from "react";
import Account from "./Account";
import Logo from "./Logo";
import Nav from "./Nav";
import CenterLayout from "../components/CenterLayout";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="flex">
      <CenterLayout>
        <Logo />
        <Nav />
        <Account />
      </CenterLayout>
    </header>
  );
};

export { Header };
