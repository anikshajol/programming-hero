const numbers = [1, 2, 3, 4];

const hightToLowNumbers = numbers.sort((a, b) => b - a);

// for (let i = 0; i < hightToLow.length; i++) {
//   console.log(hightToLow[i]);
// }

for (const hightoLowNumber of hightToLowNumbers) {
  //   console.log(hightoLowNumber);
}

const nobabs = "siraj ud doula";

for (const nobab of nobabs) {
  //   console.log(nobab);
}

// obj

let obj = {
  name: "Max",
  age: 22,
  address: "Delhi",
};

for (let key in obj) {
  const value = obj[key];
  //   console.log(key, value);
}

const keys = Object.keys(obj);

for (let key of keys) {
  const value = obj[key];

  console.log(key, value);
}
const name = "Hero";
const greetings = "Welcome Home!" + " " + name;

const he = `${greetings}`;
console.log(he);

const obj1 = { foo: 1 };
obj1.bar = 2;

console.log(obj1);

let a = 12,
  b = 3;
[a, b] = [b, a];

console.log(a, b);
