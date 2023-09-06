let myVar = 5;


if(myVar){
    myVar=myVar*4;
}
else{
    myVar=0
}

let myMoney = null;

if(!myMoney){
    console.log(false);
}
else{
    console.log(true);
}



const money =100;



// if(money>100){
//     food='biriani'
// }
// else{
//     food =' cha'
// }

// console.log(food);


const food1 = money>100 ? 'biriani':'cha'

console.log(food1);

let drink = money>100&&myVar>100 ? 'coke':'filter pani'

console.log(drink);


// shortcut way to num to string and string to num

const num1 =5;

console.log(num1+'');

const stringNum = '5'

console.log(+stringNum);




let isActive = true

isActive = !isActive