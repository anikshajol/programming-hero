const square = (x) => {
  //   const [a, b, c, d] = x;

  //   const square1 = Math.pow(a, 2);
  //   const square2 = Math.pow(b, 2);
  //   const square3 = Math.pow(c, 2);
  //   const square4 = Math.pow(d, 2);
  //   const total = (square1 + square2 + square3 + square4) / x.length;
  let sum = 0;
  for (const num of x) {
    const res = Math.pow(num, 2);
    sum += res;
  }
  console.log(sum / x.length);
};

const numbers = [4, 4, 2, 4];

const result = square(numbers);

const array = [112, 22];
const newArray = { ...array };

// console.log(newArray);

const names = ["a", "b", "c", "d"];

const [first, ...rest] = names;

console.log(...rest[1]);
