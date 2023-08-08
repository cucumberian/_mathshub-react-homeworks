import React from "react";
import logo from "./assets/investment-calculator-logo.png";

function App() {
  const calculateHandler = (userInput) => {
    // Должен вызываться при отправке формы

    const yearlyData = []; // результаты таблицы

    let currentSavings = +userInput["current-savings"]; // сколько у вас денег сейчас
    const yearlyContribution = +userInput["yearly-contribution"]; // сколько денег вы готовы откладывать в год
    const expectedReturn = +userInput["expected-return"] / 100; // какой процент вы планируете получать от общей суммы в год
    const duration = +userInput["duration"]; // продолжительность (лет)

    // Ниже приведен код для вычисления годовых результатов (общей суммы накоплений, процентов и т. д.)
    for (let i = 0; i < duration; i += 1) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
      });
    }

    // результаты yearlyData надо отобразить в таблице
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="логотип" />
        <h1>Калькулятор Инвестиций</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Ваши текущие накопления ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">
              Сколько отложите за год ($)
            </label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Ожидаемый Процент (%, в год)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">
              Продолжительность Инвестирования (лет)
            </label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Сбросить
          </button>
          <button type="submit" className="button">
            Рассчитать
          </button>
        </p>
      </form>

      {/* Задача: Показать таблицу ниже условно (только после доступности результатов) */}
      {/* Показать текст-запаску, если данных нет */}

      <table className="result">
        <thead>
          <tr>
            <th>Год</th>
            <th>Общие накопления</th>
            <th>Накопления с процентов (в год)</th>
            <th>Всего с процентов</th>
            <th>Всего инвестировано</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023</td>
            <td>$ 11 700</td>
            <td>$ 500</td>
            <td>$ 500</td>
            <td>$ 11 200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
