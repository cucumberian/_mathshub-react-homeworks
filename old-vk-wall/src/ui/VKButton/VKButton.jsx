/* eslint-disable react/prop-types */
import React from "react";

import "./VKButton.css";

function VKButton(props) {
  return (
    <button
      type={props.type || ""}
      className={`vkbutton ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default VKButton;
