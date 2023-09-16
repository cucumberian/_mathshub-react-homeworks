import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_nav">
        <a href="">о дурке</a>
        <a href="">вызов санитаров</a>
        <a href="">стенгазета</a>
        <a href="">правила</a>
        <a href="">скорая помощь</a>
      </div>
      <p>В Дурке &copy; 2023</p>
      <a href="" className="vasily_durkin">
        Василий Дуркин
      </a>
    </div>
  );
}

export default Footer;
