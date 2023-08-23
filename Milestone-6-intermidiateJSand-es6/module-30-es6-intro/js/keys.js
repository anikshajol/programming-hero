const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// console.log(glass);

// [ 'name', 'color', 'price', 'isCleaned' ]

const keys = Object.keys(glass);

// [ 'glass', 'golden', 12, true ]
const values = Object.values(glass);

// console.log(keys);
// console.log(values);

const entries = Object.entries(glass);

// array of array or two dimensional array

[
  ["name", "glass"],
  ["color", "golden"],
  ["price", 12],
  ["isCleaned", true],
];

// console.log(entries);

// delete glass.isCleaned;

// console.log(glass);

// remove or delete with destructuring

const { isCleaned, ...shortGlass } = glass;

// console.log(shortGlass);

// Object.freeze(glass);

Object.seal(glass); //it can update but cant add

glass.source = "bangladesh";

glass.name = "nasir glass";

console.log(glass);
