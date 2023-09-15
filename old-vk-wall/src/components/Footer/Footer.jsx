import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_nav">
        <a href="">о сайте</a>
        <a href="">техподдержка</a>
        <a href="">блог</a>
        <a href="">правила</a>
        <a href="">помощь</a>
      </div>
      <p>В Контакте &copy; 2006-2008</p>
      <p className="pavel_durov">Непавел Недуров</p>
    </div>
  );
}

export default Footer;
