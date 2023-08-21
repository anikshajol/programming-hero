const names = ["badal", "shima", "anifa", "ploy"];

names.sort();

const number = [2, 4, 5, 1, 3, 7, 6, 8, 10, 9, 11, 12];
number.sort(compareNumber);

function compareNumber(a, b) {
  return a - b;
}

console.log(number);
