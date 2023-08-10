import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import YearlyTable from "./components/Table/Table";
import CalculateYearlyData from "./utils";

import logo from "./assets/investment-calculator-logo.png";
import "./App.css";

function App() {
  const [tableData, setTableData] = useState([]);

  const calculateHandler = (userInput) => {
    setTableData(CalculateYearlyData(userInput));
  };

  return (
    <div>
      <Header logoSrc={logo}>Калькуятор Инвестиций</Header>

      <Form onAddData={calculateHandler} />

      {tableData.length > 0 ? (
        <YearlyTable tableData={tableData} />
      ) : (
        <p className="no-table">Нет данных</p>
      )}
    </div>
  );
}

export default App;
