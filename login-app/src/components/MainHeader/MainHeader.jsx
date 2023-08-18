import React, { useContext } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

import { themeContext } from "../../context/ThemeContext";

import "./MainHeader.css";

function MainHeader() {
  const tContext = useContext(themeContext);

  return (
    <header
      className={`main-header ${
        themeContext.isDayTheme ? "theme-light" : "theme-dark"
      }`}
    >
      <h1 className={tContext.isDayTheme ? "theme-light" : "theme-dark"}>
        Типичная страничка
      </h1>
      <Navigation />
      <ThemeToggle />
    </header>
  );
}

export default MainHeader;
