/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import { themeContext } from "./context/ThemeContext";

import "./theme.css";

function App() {
  const authContext = useContext(AuthContext);
  console.log("authContext =", authContext);

  return (
    <>
      <MainHeader />
      <main className={themeContext.isDayTheme ? "theme-light" : "theme-dark"}>
        {!authContext.isLoggedIn && <Login onLogin={authContext.onLogin} />}
        {authContext.isLoggedIn && <Home onLogout={authContext.onLogout} />}
      </main>
    </>
  );
}

export default App;
