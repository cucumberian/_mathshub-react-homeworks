/* eslint-disable react/prop-types */
import React from "react";
import "./VKButtonTransparent.css";

function VKButtonTransparent(props) {
  return (
    <button
      className={`vkbutton_transparent ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default VKButtonTransparent;
 