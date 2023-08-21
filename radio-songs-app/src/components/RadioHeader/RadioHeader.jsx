import React from "react";
import "./RadioHeader.css";

class RadioHeader extends React.Component {
  render() {
    return (
      <div className="radio-header">
        <h1>Заявки на Радио</h1>
        <p>Отправляёте заявку и мы сыграем вашу любимую песню!</p>
      </div>
    );
  }
}

export default RadioHeader;
