document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInputValueByID("withdraw-input");

  const previousWithdrawAmount = getInputTextById("withdraw-amount");

  const totalWithdraw = withdrawValue + previousWithdrawAmount;

  const balance = getInputTextById("balance-amount");

  const newBalance = balance - withdrawValue;

  if (newBalance < withdrawValue) {
    alert("hello");
  }
  setTextElementValueById("withdraw-amount", totalWithdraw);
  setTextElementValueById("balance-amount", newBalance);
});
