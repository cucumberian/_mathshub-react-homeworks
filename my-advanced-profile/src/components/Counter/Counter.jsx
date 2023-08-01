import React, { useState } from "react";
import "./Counter.css";

function Counter({ counterInitialValue }) {
  const [counterValue, setCounter] = useState(counterInitialValue);
  const [className, setClass] = useState("counter");

  function handleClick(e) {
    let increase = 0;
    setClass("counter");
    if (e.target.dataset.role === "increase") {
      increase = +1;
    } else if (e.target.dataset.role === "decrease") {
      if (counterValue <= 0) {
        setClass("counter__wrong");
        return;
      }
      increase = -1;
    } else {
      return;
    }
    console.log(`e.target.dataset =`, e.target.dataset);
    console.log(increase);
    setCounter(counterValue + increase);
  }

  return (
    <>
      <p className={className}>Побеждено сегодня монстров: {counterValue}</p>
      <div>
        <button data-role="decrease" type="submit" onClick={handleClick}>
          Уменьшить
        </button>
        <button data-role="increase" type="submit" onClick={handleClick}>
          Увеличить
        </button>
      </div>
    </>
  );
}

export default Counter;
