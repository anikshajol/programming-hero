function multiplicationOfNumbers(number) {
    let multiplication = 1;
    for(let i=1;i<=number;i++){

        multiplication*=i
        // console.log(i,number);
    }
    return multiplication
 
}
// const num = 2
// const multiplication = multiplicationOfNumbers(num)

// console.log(multiplication)

const result = multiplicationOfNumbers(5)
// console.log(result);


function factorial(num) {
    let result = 1;
    for(let i=num; i>=1; i--){
        
        result*=i
        console.log(i,  '*', num , )
    }
   return result
  
}

console.log('factorial',factorial(9));

