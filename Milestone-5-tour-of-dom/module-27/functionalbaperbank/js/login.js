document.getElementById("submit-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email");

  const passwordInput = document.getElementById("password");

  if (
    emailInput.value === "shajolanik@gmail.com" &&
    passwordInput.value === "bangladesh"
  ) {
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.style.backgroundColor = "blue";
    window.location.href = "bank.html";

    console.log(document.onerror);
  }
});
