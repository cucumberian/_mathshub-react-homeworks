import React from "react";
import "./Overlay.css";

function Overlay(props) {
  return <div className="overlay" onClick={props.onClick}></div>;
}

export default Overlay;
