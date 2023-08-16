document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputValueByID("deposit-input");
  const previousDeposit = getInputTextById("deposit-amount");
  const previousBalance = getInputTextById("balance-amount");

  const newBalance = previousBalance + newDepositAmount;

  const totalDeposit = newDepositAmount + previousDeposit;
  const totalBalance = setTextElementValueById("deposit-amount", totalDeposit);
  setTextElementValueById("balance-amount", newBalance);
});
