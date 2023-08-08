import React from "react";

function Header({ logoSrc, children }) {
  return (
    <header className="header">
      <img src={logoSrc} alt="логотип" />
      <h1>{children}</h1>
    </header>
  );
}

export default Header;
