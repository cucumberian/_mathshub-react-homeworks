import React from "react";
import ReactDOM from "react-dom";

import "./Header.css";

function Header() {
  return ReactDOM.createPortal(
    <p>Header</p>,
    document.getElementById("header")
  );
}

export default Header;
