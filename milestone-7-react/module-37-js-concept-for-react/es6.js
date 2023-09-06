/* 


1. template string- ``

2. ARROW FUNCTION

3. SPREAD OPERATOR

*/

const student = { name: "anik", age: 23 };

const about = `my name is ${student.age}`;

const isEven = x=>x%2==0

// sperad operator

const array = [1,2,3,4,5]

// array.splice(1,0,2)

// console.log(array);

const newArray = [...array]

newArray.push(6)

const currentArary = [...newArray,7,8,9]
console.log(array);
console.log(newArray);
console.log(currentArary);