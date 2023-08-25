// 8 ways to get undefined .

/* 
1. variable that is not declare or initialized
2. function is no return
3. parameter that is not passed that will undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exist on an object will give you undefined
6.accessing array elements outside of the index range. 
7. deleting an element inside an array 
8. set a value directly to undefined [shouldnot used]

*/

let first;
// console.log(first);

function second(a, b) {
  const total = a + b;
}

// console.log(second());

function third(a, b, c, d) {
  const total = a + b + c + d;
  //   console.log(a, b, c, d);
}

third(1, 2);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

// console.log(noNegative(2, -5));

const fifth = { id: 2, name: "poncho ", age: 40 };

// console.log(fifth.age, fifth.salry);

const sixth = [2, 2, 3, 34];

// console.log(sixth[1], sixth[33]);

// const seventh

delete sixth[1]; // should not use this instead use splice

const eight = undefined;

const nine = null; //-> kno data set kra na hle null diye declaare kra hy
