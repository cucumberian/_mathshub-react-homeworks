/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import { themeContext } from "./context/ThemeContext";

import "./theme.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // загрузка данных приложения из локального хранилища
  useEffect(() => {
    // загрузка статуса логина
    const storageUserStatus = localStorage.getItem("isLoggedIn");
    if (storageUserStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = useCallback((email, password) => {
    // Тут мы должны проверять логин и пароль
    // Но это всего лишь демо
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }, []);

  const logoutHandler = useCallback(() => {
    setIsLoggedIn(() => {
      localStorage.setItem("isLoggedIn", false);
      return false;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      <main className={themeContext.isDayTheme ? "theme-light" : "theme-dark"}>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
