/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

function AuthContextProvider({ children }) {
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
    console.log("onLogin");
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }, []);

  const logoutHandler = useCallback(() => {
    console.log("onLogout");

    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
