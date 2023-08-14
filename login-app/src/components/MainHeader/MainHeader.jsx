import React from "react";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import "./MainHeader.css";

function MainHeader() {
  return (
    <header className="main-header">
      <h1>Типичная страничка</h1>
      <Navigation />
      <ThemeToggle />
    </header>
  );
}

export default MainHeader;
