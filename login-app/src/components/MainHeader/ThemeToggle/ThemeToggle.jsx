import React, { useContext, useCallback } from "react";

import { themeContext } from "../../../context/ThemeContext";

import "./ThemeToggle.css";

function ThemeToggle() {
  // используем внешнее состояние для передачи состояния темы
  const tContext = useContext(themeContext);

  // функция при нажатии на элемент переключения темы
  const toggleThemeHandler = useCallback((e) => {
    tContext.setThemeHandler(e.target.checked);
  }, []);

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

export default React.memo(ThemeToggle);
