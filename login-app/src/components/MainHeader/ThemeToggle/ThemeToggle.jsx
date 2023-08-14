import React, { useContext } from "react";

import ThemeContext from "../../../context/theme-context";

import "./ThemeToggle.css";

function ThemeToggle() {
  // используем внешнее состояние для передачи состояния темы
  const themeContext = useContext(ThemeContext);

  // функция при нажатии на элемент переключения темы
  const toggleThemeHandler = (e) => {
    themeContext.setThemeHandler(e.target.checked);
  };

  return (
    <label
      id="theme_toggle"
      className="theme_toggle"
      htmlFor="theme_toggle-input"
    >
      <input
        type="checkbox"
        onChange={toggleThemeHandler}
        id="theme_toggle-input"
        checked={themeContext.isDayTheme}
      />
      <span className="theme_toggle-slider toggle_slider-round" />
    </label>
  );
}

export default ThemeToggle;
