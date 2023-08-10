import React, { useState, useRef } from "react";
import { ReactDOM } from "react";
import ButtonSet from "../../UI/ButtonSet/ButtonSet";
import Button from "../../UI/Button";
import PLabelInput from "../PLabelInput/PLabelInput";
import ErrorModal from "../ErrorModal/ErrorModal";
import "./Form.css";
import Window from "../../UI/Window/Window";

function Form({ onAddData }) {
  const [errorStatus, setErrorStatus] = useState(false);
  const defaultErrorTexts = {
    header: "Ошибка ввода данных",
    message: "Что-то пошло не так",
  };
  const [errorText, setErrorText] = useState(defaultErrorTexts);

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

  function isErrorIn(value, callbackfn, errorMessage) {
    if (callbackfn(value)) {
      setErrorStatus(true);
      setErrorText((prev) => ({
        ...prev,
        message: errorMessage,
      }));
      return true;
    }
    return false;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const savingsValue = savingsRef.current.value;
    const contributionValue = contributionRef.current.value;
    const returnValue = returnRef.current.value;
    const durationValue = durationRef.current.value;

    if (
      savingsValue.trim().length === 0 ||
      contributionValue.trim().length === 0 ||
      returnValue.trim().length === 0 ||
      durationValue.trim().length === 0
    ) {
      setErrorStatus(true);
      setErrorText((prev) => ({
        ...prev,
        message: "Не оставляйте поля пустыми!",
      }));
      return;
    }

    if (
      isErrorIn(savingsValue, (v) => v <= 0, "Текущих накоплений недостаточно")
    )
      return;

    if (
      isErrorIn(
        contributionValue,
        (v) => v < 0,
        "Вы не можете откладывать меньше 0."
      )
    )
      return;

    if (
      isErrorIn(
        returnValue,
        (v) => v < 0,
        "А смысл вкладывать деньги под отрицательный процент?"
      )
    )
      return;

    if (
      isErrorIn(
        durationValue,
        (d) => d < 0,
        "Продолжительность инвестирования должна быть больше 0"
      )
    )
      return;

    const data = {
      "current-savings": savingsValue,
      "yearly-contribution": contributionValue,
      "expected-return": returnValue,
      duration: durationValue,
    };

    onAddData(data);
  };

  const onErrorModalClickHandler = () => {
    setErrorStatus(false);
  };

  return (
    <>
      {errorStatus && (
        <ErrorModal
          headerText={errorText.header}
          messageText={errorText.message}
          onClick={onErrorModalClickHandler}
        />
      )}

      <Window>
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
            <PLabelInput inputRef={returnRef} inputStep={0.1}>
              Ожидаемый Процент (%, в год)
            </PLabelInput>

            <PLabelInput inputRef={durationRef}>
              Продолжительность Инвестирования (лет)
            </PLabelInput>
          </div>

          <ButtonSet className="actions">
            <Button type="reset" className="buttonAlt" onClick={onResetHandler}>
              Сбросить
            </Button>

            <Button
              type="button"
              className="buttonAlt"
              onClick={takeCreditHandler}
            >
              Взять кредит
            </Button>

            <Button type="submit" className="button">
              Рассчитать
            </Button>
          </ButtonSet>
        </form>
      </Window>
    </>
  );
}

export default Form;
