import React from "react";

function YearlyTable({ tableData }) {
  console.log("Table got tableData:", tableData);
  const now = new Date();
  const currentYear = now.getFullYear();

  function RoundValue(value, precision = 2) {
    return parseFloat(value.toFixed(precision));
  }

  return (
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
        {tableData.map((item) => (
          <tr key={`${Math.random()}`}>
            <td>{RoundValue(item.year + currentYear)}</td>
            <td>{RoundValue(item.savingsEndOfYear)}</td>
            <td>{RoundValue(item.yearlyInterest)}</td>
            <td>{RoundValue(item.totalContributed)}</td>
            <td>{RoundValue(item.totalSavings)}</td>
          </tr>
        )) || (
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default YearlyTable;
