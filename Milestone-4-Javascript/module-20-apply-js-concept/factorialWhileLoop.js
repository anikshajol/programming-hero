function factorial(number) {
    let index = 1;
    let result = 1;
    while (index<=number) {
        result*=index
        // console.log(index,result,number);
        index++
    }
    return result
}
const num = 5;
const fact = factorial(num)
// console.log(fact);


function factDecrement(num) {
    let i = num;
    let mul = 1;

    while(i>=1){
        mul*=i;
        console.log(num,i);
        i--

    }
    return mul

}

console.log(factDecrement(5))