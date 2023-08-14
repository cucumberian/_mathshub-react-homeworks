/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import ThemeContext from "./context/theme-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDayTheme, setIsDayTheme] = useState(true);

  // загрузка данных приложения из локального хранилища
  useEffect(() => {
    // загрузка статуса логина
    const storageUserStatus = localStorage.getItem("isLoggedIn");
    if (storageUserStatus === "true") {
      setIsLoggedIn(true);
    }

    // загрузка статуса темы
    const localIsDayTheme = localStorage.getItem("isDayTheme");

    if (localIsDayTheme === null) {
      setIsDayTheme(true);
    } else {
      const parseResult = JSON.parse(localIsDayTheme);
      setIsDayTheme(parseResult);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Тут мы должны проверять логин и пароль
    // Но это всего лишь демо
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(() => {
      localStorage.setItem("isLoggedIn", false);
      return false;
    });
  };

  // функция вызывается из переключателя тем
  const setThemeHandler = (isDayThemeStatus) => {
    setIsDayTheme(isDayThemeStatus);
  };

  // записываем значение темы в локальное хранилище при измененении темы
  useEffect(() => {
    localStorage.setItem("isDayTheme", isDayTheme);
  }, [isDayTheme]);

  return (
    <ThemeContext.Provider value={{ isDayTheme, setThemeHandler }}>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
