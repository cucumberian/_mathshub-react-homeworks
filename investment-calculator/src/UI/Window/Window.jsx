import React from "react";
import "./Window.css";

function Window(props) {
  return <div className={`window ${props.className}`}>{props.children}</div>;
}

export default Window;
