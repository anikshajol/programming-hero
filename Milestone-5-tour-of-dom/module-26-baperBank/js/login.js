//step1: get the click event handler with the submit button
document.querySelector("#submit-btn").addEventListener("click", function () {
  //step2: get the email and password inside the email and password input
  const email = document.getElementById("email");
  const password = document.querySelector("#password");

  const emailValue = email.value;
  const passwordValue = password.value;

  //   this is not write way to verify email and password. its just for testing. we will learn original method later.

  if (emailValue === "shajolanik@gmail.com" && passwordValue === "bangladesh") {
    const login = document.getElementById("submit-btn");
    login.style.backgroundColor = "blue";
    location.href = "bank.html";
  } else {
    const login = document.getElementById("submit-btn");
    alert("invalid user");
    login.style.backgroundColor = "red";
  }
});
