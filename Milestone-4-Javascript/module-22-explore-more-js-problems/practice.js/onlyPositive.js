function onlyPositive(numbers) {
  let positive = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 0) {
      break;
    }
    positive.push(number);
  }
  return positive;
}

const numbers = [45, 87, 94, 11, 47, -56, 70, 2, 28];

// console.log(onlyPositive(numbers));

let age = 29;
const name = "Anik";

age = 39;

console.log(age);
