import React from "react";
import NavUtil from "../../components/UIKit/Nav";

const LINKS = [
  {
    to: "/",
    text: "Main",
  },
  {
    to: "/about",
    text: "About",
  },
];

const Nav = () => {
  return <NavUtil logo="Alternatives to Helvetica" links={LINKS} />;
};

export default Nav;
