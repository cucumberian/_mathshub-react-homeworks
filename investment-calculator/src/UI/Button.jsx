import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      type={props.types}
      className={props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
