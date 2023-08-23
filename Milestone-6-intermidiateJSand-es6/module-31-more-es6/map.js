const numbers = [4, 5, 2, 8, 10];

console.log(Math.max(...numbers));

// const doubled = [];

// for (const num of numbers) {
//   const double = Math.pow(num, 2);
//   doubled.push(double);
// }

// console.log(doubled);

const max = numbers.map((n) => n * 2);

console.log(max);
