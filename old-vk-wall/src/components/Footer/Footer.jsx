import React from "react";
import ReactDOM from "react-dom";

import "./Footer.css";

function Footer() {
  return ReactDOM.createPortal(
    <p>Footer</p>,
    document.getElementById("footer")
  );
}

export default Footer;
