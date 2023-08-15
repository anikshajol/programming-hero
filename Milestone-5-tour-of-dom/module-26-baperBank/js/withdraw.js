const withdrawInput = document.getElementById("withdraw-input");

const withdrawAmount = document.getElementById("withdraw-amount");

const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function () {
  // get value
  const inputAmount = parseFloat(withdrawInput.value);

  //   get innertext
  const amountOfWithdraw = parseFloat(withdrawAmount.innerText);

  //   add value and innertext
  const totalAmountOfWithdraw = amountOfWithdraw + inputAmount;

  //   set total amount to innertext

  withdrawAmount.innerText = totalAmountOfWithdraw;

  //   reduce balance

  const balanceAmount = document.getElementById("balance-amount");

  const amountOfBalanceNumber = parseFloat(balanceAmount.innerText);

  balanceAmount.innerText = amountOfBalanceNumber - inputAmount;

  //   input value empty

  withdrawInput.value = "";
});

// balance amount

const balanceAmount = document.getElementById("balance-amount");

const amountOfBalanceNumber = parseFloat(balanceAmount.innerText);
