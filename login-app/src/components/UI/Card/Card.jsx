/* eslint-disable react/destructuring-assignment */
import React, { useContext } from "react";

import "./Card.css";
import { themeContext } from "../../../context/ThemeContext";

function Card(props) {
  const context = useContext(themeContext);

  return (
    <div className={`card ${props.className} ${context.themeClassName}`}>
      {props.children}
    </div>
  );
}

export default Card;
