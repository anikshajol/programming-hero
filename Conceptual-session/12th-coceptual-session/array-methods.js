// //forEach, map, find, filter, and reduce

// const arr = [1, 2, 3];

// // const a = (x) => console.log(x);

// // arr.forEach(a);

// arr.forEach((x) => console.log(x));

// let sum = 0;

// arr.forEach((x) => (sum += x));

// console.log(`Total of arr ${sum}`);

// // for each does not return anything

// // map return an array

// const result = arr.map((item) => item * 2);

// console.log(result);

// const fruits = ["Mango", "Chango", "bango", "tango"];

//array.forEach (element,index,mainArray=>{})

// fruits.forEach((item, index, arr) => console.log(item, index, arr));

//----------------find method----------------

const fruits = ["Mango", "Chango", "bango", "tango"];

const find = (fruits) => {
  for (let item of fruits) {
    if (item === "bango") {
      return item;
    }
  }
};

console.log(find(fruits));

const y = fruits.find((item) => item.toUpperCase() === "mango".toUpperCase());

console.log(y);
