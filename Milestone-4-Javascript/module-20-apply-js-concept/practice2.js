/* 
1. No parameters no returns;
2. has parameters no returns;
3. No parameters , has returns;
4. has parameters , has returns;
*/

// 1.

function show() {
  console.log("Hello");
}

show();

//2.

function add(x, y) {
  console.log(x + y);
}

add(1, 2);

// 3.

function giveMoney() {
  const money = 500;
  return money;
}

console.log(giveMoney());

// 4.
function multi(a, b) {
  const result = a * b;
  return result;
}

const a = 50;
const b = 50;

const multiplication = multi(a, b);

console.log(multiplication);

//

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [2, 3, 4, 5];

const result = sumOfArray(arr);

console.log("Total Sum Of array", result);
