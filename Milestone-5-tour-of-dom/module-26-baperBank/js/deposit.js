const depositAmount = document.getElementById("deposit-amount");
console.log(depositAmount.innerText);

const depositInput = document.getElementById("deposit-input");

const depositBtn = document.getElementById("deposit-btn");

// deposit btn

depositBtn.addEventListener("click", function () {
  const depositInputValue = parseFloat(depositInput.value);

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountNumber = parseFloat(depositAmount.innerText);

  const depositTotal = depositAmountNumber + depositInputValue;

  depositAmount.innerText = depositTotal;
  depositInput.value = "";

  // balance
  const balanceAmount = document.getElementById("balance-amount");

  const amountOfBalanceNumber = parseFloat(balanceAmount.innerText);

  const currentBalance = amountOfBalanceNumber + depositInputValue;

  balanceAmount.innerText = currentBalance;
});
