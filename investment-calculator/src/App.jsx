import React, { useState } from "react";

import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import YearlyTable from "./components/Table/Table";
import CalculateYearlyData from "./utils";

function App() {
  const [tableData, setTableData] = useState([]);

  const calculateHandler = (userInput) => {
    setTableData(CalculateYearlyData(userInput));
  };

  return (
    <div>
      <Header logoSrc={logo}>Калькуятор Инвестиций</Header>

      <Form onAddData={calculateHandler} />

      {/* Задача: Показать таблицу ниже условно (только после доступности результатов) */}
      {/* Показать текст-запаску, если данных нет */}
      <YearlyTable tableData={tableData} />
    </div>
  );
}

export default App;
