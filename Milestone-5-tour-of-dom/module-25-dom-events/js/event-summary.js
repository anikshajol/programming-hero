function handleOnclick() {
  const status = document.getElementById("handler-status");

  status.innerText = "I am from click";
}

document
  .getElementById("change-text")
  .addEventListener("click", function changeText() {
    const status = document.getElementById("handler-status");

    status.innerText = "Hello from js";
  });

document
  .getElementById("update-btn")
  .addEventListener("click", function updateText() {
    const getInputField = document.getElementById("input");

    const inputText = getInputField.value;

    const p = document.getElementById("input-text");

    p.innerText = inputText;
    getInputField.value = "";
  });
