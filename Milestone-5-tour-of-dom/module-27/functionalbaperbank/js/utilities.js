function getInputValueByID(inputId) {
  const inputField = document.getElementById(inputId);
  const getNumberInputField = parseFloat(inputField.value);
  inputField.value = "";
  return getNumberInputField;
}

function getInputTextById(textId) {
  const textField = document.getElementById(textId);
  const textFieldNumber = parseFloat(textField.innerText);
  return textFieldNumber;
}

//

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);

  textElement.innerText = newValue;
}
