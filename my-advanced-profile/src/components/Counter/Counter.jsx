/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <>
        <p
          className={
            this.props.counterValue <= 0 ? "counter counter__wrong" : "counter"
          }
        >
          Побеждено сегодня монстров: {this.props.counterValue}
        </p>
        <div>
          <button
            data-role="decrease"
            type="submit"
            onClick={this.props.clickMinus}
          >
            Уменьшить
          </button>
          <button
            data-role="increase"
            type="submit"
            onClick={this.props.clickPlus}
          >
            Увеличить
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
