
// GET DEPOSIT BUTTON

document.getElementById('deposit-btn').addEventListener('click', function(){

    // step-2
    // get deposit input

    const deopositInput = document.getElementById('deposit-input')

    // convert input string to number

    const newDepositAmount = parseFloat(deopositInput.value)
    

 

    deopositInput.value = ' '

    if(isNaN(newDepositAmount)){
        alert('Provide a valid Number')
        return
    }



    // step-3
   //get total deposit amount
    const depositAmount = document.getElementById('deposit-amount')

    // convert deposit amount string to convet

    const previousDepositAmount = parseFloat(depositAmount.innerText)


    depositAmount.innerText = previousDepositAmount+newDepositAmount


    // step-4
    // get total balance

    const totalBalance= document.getElementById('balance-amount')

    // convert total balance innertext string to number

     const previousTotalBalance = parseFloat(totalBalance.innerText)


    //  new balance 

    const newBalance = newDepositAmount+previousTotalBalance

    totalBalance.innerText = newBalance


})