const max = Math.max(5, 2, 5, 88, 2);

const numbers = [2, 3, 5, 67, 80, 20, 44];

const arrayMax = Math.max(...numbers);

// console.log(...numbers);

const names = ["a", "b", "c"];

// console.log(arrayMax);

// use spread operator to copy

const friends = ["anik", "shima", "syha"];

const family = friends;

const family2 = [...friends, "arif"];

family.push("sadika");

console.log(friends);
console.log(family2);
