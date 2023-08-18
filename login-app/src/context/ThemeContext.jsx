import React, { useState, useEffect, useCallback, useMemo } from "react";

const themeContext = React.createContext();

function ThemeContext({ children }) {
  const [isDayTheme, setIsDayTheme] = useState(true);

  useEffect(() => {
    // загрузка статуса темы
    const localIsDayTheme = localStorage.getItem("isDayTheme");

    if (localIsDayTheme === null) {
      setIsDayTheme(true);
    } else {
      const parseResult = JSON.parse(localIsDayTheme);
      setIsDayTheme(parseResult);
    }
  }, []);

  // функция вызывается из переключателя тем
  const setThemeHandler = useCallback((isDayThemeStatus) => {
    setIsDayTheme(isDayThemeStatus);
  }, []);

  // записываем значение темы в локальное хранилище при измененении темы
  useEffect(() => {
    localStorage.setItem("isDayTheme", isDayTheme);
  }, [isDayTheme]);

  return (
    <themeContext.Provider
      value={useMemo(
        () => ({
          isDayTheme,
          setThemeHandler,
          themeClassName: isDayTheme ? "theme-light" : "theme-dark",
        }),
        [isDayTheme]
      )}
    >
      {children}
    </themeContext.Provider>
  );
}

export { themeContext };
export default React.memo(ThemeContext);
