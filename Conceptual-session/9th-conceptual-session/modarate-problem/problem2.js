
function gemsToDiamon(num1,num2,num3) {
    if(typeof num1!=='number' || typeof num2 !=='number' || typeof num3 !== 'number'){
        return 'provide a valid num'
    }
else{
    
    const gems1 = 21*num1;
    const gems2 = 32*num2;
    const gems3 = 43*num3;

    const total = gems1+gems2+gems3;

    if(total > 2000){
        const rest = total-2000;
        return rest

}
return total
}

}

// console.log(gemsToDiamon(20,200,50));
console.log(gemsToDiamon(100,5,1));

let a ='john'
let b = 'ohn'

let res = a.split(' ');

console.log(res);