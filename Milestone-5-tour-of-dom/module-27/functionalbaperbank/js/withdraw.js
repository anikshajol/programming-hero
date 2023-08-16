document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInputValueByID("withdraw-input");

  const previousWithdrawAmount = getInputTextById("withdraw-amount");

  if (isNaN(withdrawValue)) {
    alert(" Invalid input ");
    return;
  }
  const totalWithdraw = withdrawValue + previousWithdrawAmount;

  const balance = getInputTextById("balance-amount");

  const newBalance = balance - withdrawValue;

  if (balance < withdrawValue) {
    alert("Sorry Insufficient balance");
    return;
  }

  setTextElementValueById("withdraw-amount", totalWithdraw);
  setTextElementValueById("balance-amount", newBalance);
});
