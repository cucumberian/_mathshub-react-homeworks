import React, { useRef } from "react";
import Button from "../../UI/Button";
import PLabelInput from "../PLabelInput/PLabelInput";

function Form({ onAddData }) {
  const savingsRef = useRef();
  const contribution = useRef();
  const returnRef = useRef();
  const durationRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("onSubmit");
    const savingsValue = savingsRef.value;
    const contributionValue = contribution.value;
    const returnValue = returnRef.value;
    const durationValue = durationRef.value;

    const data = {
      savings: savingsValue,
      contribute: contributionValue,
      return: returnValue,
      duration: durationValue,
    };

    onAddData(data);

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="input-group">
        <PLabelInput id="current-savings">
          Ваши текущие накопления ($)
        </PLabelInput>

        <PLabelInput id="yearly-contribution">
          Сколько отложите за год ($)
        </PLabelInput>
      </div>
      <div className="input-group">
        <PLabelInput id="expected_return">
          Ожидаемый Процент (%, в год)
        </PLabelInput>

        <PLabelInput id="duration">
          Продолжительность Инвестирования (лет)
        </PLabelInput>
      </div>
      <div className="actions">
        <Button type="reset" className="buttonAlt">
          Сбросить
        </Button>
        <Button type="submit" className="button">
          Рассчитать
        </Button>
      </div>
    </form>
  );
}

export default Form;
