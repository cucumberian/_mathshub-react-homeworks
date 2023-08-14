/* eslint-disable react/destructuring-assignment */
import React, { useContext } from "react";

import "./Card.css";
import ThemeContext from "../../../context/theme-context";

function Card(props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`card ${props.className} ${themeContext.themeClassName}`}>
      {props.children}
    </div>
  );
}

export default Card;
