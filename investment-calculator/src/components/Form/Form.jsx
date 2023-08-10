import React, { useRef } from "react";
import Button from "../../UI/Button";
import PLabelInput from "../PLabelInput/PLabelInput";

function Form({ onAddData }) {
  const savingsRef = useRef();
  const contributionRef = useRef();
  const returnRef = useRef();
  const durationRef = useRef();

  const takeCreditHandler = (e) => {
    e.preventDefault();
    savingsRef.current.value = 100;
    contributionRef.current.value = 0;
    returnRef.current.value = 10;
    durationRef.current.value = 3;
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    savingsRef.current.value = "";
    contributionRef.current.value = "";
    returnRef.current.value = "";
    durationRef.current.value = "";
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const savingsValue = savingsRef.current.value;
    const contributionValue = contributionRef.current.value;
    const returnValue = returnRef.current.value;
    const durationValue = durationRef.current.value;

    const data = {
      "current-savings": savingsValue,
      "yearly-contribution": contributionValue,
      "expected-return": returnValue,
      duration: durationValue,
    };

    onAddData(data);
  };

  return (
    <form className="form" action="" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <PLabelInput inputRef={savingsRef}>
          Ваши текущие накопления ($)
        </PLabelInput>

        <PLabelInput inputRef={contributionRef}>
          Сколько отложите за год ($)
        </PLabelInput>
      </div>

      <div className="input-group">
        <PLabelInput inputRef={returnRef}>
          Ожидаемый Процент (%, в год)
        </PLabelInput>

        <PLabelInput inputRef={durationRef}>
          Продолжительность Инвестирования (лет)
        </PLabelInput>
      </div>
      <div className="actions">
        <Button type="reset" className="buttonAlt" onClick={onResetHandler}>
          Сбросить
        </Button>
        <Button type="button" className="buttonAlt" onClick={takeCreditHandler}>
          Взять кредит
        </Button>
        <Button type="submit" className="button">
          Рассчитать
        </Button>
      </div>
    </form>
  );
}

export default Form;
