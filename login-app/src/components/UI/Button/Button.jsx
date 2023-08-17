/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";

import "./Button.css";

function Button(props) {
  console.log("Button");
  return (
    <button
      type={props.type || "button"}
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default React.memo(Button);
