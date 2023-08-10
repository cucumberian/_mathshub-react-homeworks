function CalculateYearlyData(userInput) {
  const yearlyData = []; // результаты таблицы

  let currentSavings = +userInput["current-savings"]; // сколько у вас денег сейчас
  const yearlyContribution = +userInput["yearly-contribution"]; // сколько денег вы готовы откладывать в год
  const expectedReturn = +userInput["expected-return"] / 100; // какой процент вы планируете получать от общей суммы в год
  const duration = +userInput.duration; // продолжительность (лет)

  // Ниже приведен код для вычисления годовых результатов (общей суммы накоплений, процентов и т. д.)
  let totalContributed = 0; // всего процентов
  let totalSavings = currentSavings; // Всего инвестировано
  for (let i = 0; i < duration; i += 1) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    totalContributed += yearlyInterest;

    yearlyData.push({
      year: i + 1,
      yearlyInterest, // Накопления с процентов (в год)
      savingsEndOfYear: currentSavings, // Общие накопления
      yearlyContribution, // Годовой доход
      totalContributed, // Всего процентов = все накопления с процентов за все года
      totalSavings, // Всего инвестировано = Общие накопления + Общие вложения
    });
    totalSavings += yearlyInterest;
  }
  return yearlyData;
}

export default CalculateYearlyData;
