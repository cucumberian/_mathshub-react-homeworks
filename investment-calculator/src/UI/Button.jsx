import React from "react";

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
