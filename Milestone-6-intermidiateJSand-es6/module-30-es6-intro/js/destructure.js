let obj = {
  name: "Max",
  age: 22,
  address: "Delhi",
};

const { name, age, address } = obj;

//
console.log(address);

// array destructure will be serially

const array = [1, 3, 5, 6];

const [one, , three] = array;

console.log(three);
