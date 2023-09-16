import React from "react";
import ReactDOM from "react-dom";
import VkLogo from "../../ui/VkLogo/VkLogo";
import User from "../User/User";

import "./Header.css";

function Header() {
  return ReactDOM.createPortal(
    <header>
      <VkLogo />
      <User />
    </header>,
    document.getElementById("header")
  );
}

export default Header;
