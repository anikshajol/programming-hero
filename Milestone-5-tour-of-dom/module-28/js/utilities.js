function getInputValue(id) {
    const InputFieldArea = document.getElementById(id)
    const inputNumber = parseFloat(InputFieldArea.value)
    InputFieldArea.value = ''



    return inputNumber
}

function setInputValue (id, value){
    const displayResult = document.getElementById(id)

    
 
    displayResult.innerText = value
}