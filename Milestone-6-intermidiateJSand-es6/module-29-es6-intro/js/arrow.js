// function declaration

function add(a, b = 0) {
  const total = a + b;
  return total;
}

// console.log(add(10, 20));

// function expression

const add1 = function add1(a, b) {
  const total = a + b;
  return total;
};

// function expression with anonymous function
const add2 = function (a, b) {
  const total = a + b;
  return total;
};

// arrow function

const add3 = (a, b) => a + b;

const result = add3(5, 5);
console.log(result);

// interview ques difference between arrow,regular expression and function declaration
