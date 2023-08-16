

// step-1 get the withdraw button



// step-1 get the withdraw button
document.getElementById('withdraw-btn').addEventListener('click',function(){

//step-2 get withdraw input

const withdrawInput = document.getElementById('withdraw-input')


// convet value string to number

const newWithdrawAmount = parseFloat(withdrawInput.value)

console.log(newWithdrawAmount);

// get input empty after clicking

withdrawInput.value = '';

// validatioon if input is nan

if(isNaN(newWithdrawAmount)){
    alert('Please input a valid number')
    return
}

// step-3

// get total withdraw amount

const withdrawAmount = document.getElementById('withdraw-amount')

// convert string to number

const previousWithdrawAmount = parseFloat(withdrawAmount.innerText)




// get balance 

const totalBalance = document.getElementById('balance-amount')

// convert string to number

const previousBalance = parseFloat(totalBalance.innerText)


const totalWithdraw = previousBalance-newWithdrawAmount


if(previousBalance==0){
    alert('You cant withdraw your amount less than balance')
    return
}
// set input withdraw to withdraw amount

withdrawAmount.innerText = newWithdrawAmount+previousWithdrawAmount


totalBalance.innerText = totalWithdraw



})

