import React from "react";
import "./Counter.css";

function Counter({ counterValue, clickMinus, clickPlus }) {
  console.log("counterValue = ", counterValue);
  return (
    <>
      <p className={counterValue <= 0 ? "counter counter__wrong" : "counter"}>
        Побеждено сегодня монстров: {counterValue}
      </p>
      <div>
        <button data-role="decrease" type="submit" onClick={clickMinus}>
          Уменьшить
        </button>
        <button data-role="increase" type="submit" onClick={clickPlus}>
          Увеличить
        </button>
      </div>
    </>
  );
}

export default Counter;
