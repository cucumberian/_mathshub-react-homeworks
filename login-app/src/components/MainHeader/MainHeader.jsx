import React, { useContext } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

import ThemeContext from "../../context/theme-context";

import "./MainHeader.css";

function MainHeader() {
  const themeContext = useContext(ThemeContext);

  return (
    <header
      className={`main-header ${
        themeContext.isDayTheme ? "theme-light" : "theme-dark"
      }`}
    >
      <h1 className={themeContext.isDayTheme ? "theme-light" : "theme-dark"}>
        Типичная страничка
      </h1>
      <Navigation />
      <ThemeToggle />
    </header>
  );
}

export default MainHeader;
