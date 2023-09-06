const products = [
  {
    product: {
      name: "a",
      age: 1,
    },
  },
];

// console.log();

const product = products[0].product;

// let num = `${product.name}`;

// console.log(num);

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5, 6];

// console.log(arr);
// console.log(newArr);

// const a = newArr.filter((num) => num != 2);

// let sum = 0;
// for (let n of a) {
//   sum += n;
// }

// console.log(sum);

// const num = () => 9

// console.log(num());

// const multiply = (num) => num * 12;

// console.log(multiply(3));

// const res = (x, y) => (x + y) / 4;

// console.log(res(10, 2));

// const result = (x, y) => {
//   let a = x + 5;
//   let b = y + 5;

//   let result = a * b;
//   return result;
// };

// console.log(result(1, 1));

// const cart = [
//   {
//     name: "laptop",
//     price: 32000,
//     brand: "lenovo",
//   },
//   {
//     name: "phone",
//     price: 132000,
//     brand: "apple",
//   },
//   {
//     name: "watch",
//     price: 3000,
//     brand: "casio",
//   },
//   {
//     name: "camera",
//     price: 21000,
//     brand: "sony",
//   },
// ];

// console.log(cart);

// for (let pr of cart) {
//   const { name, price, brand } = pr;

//   console.log(name);
// }

// const name = "Maynard";
// const color = "red";
// const number = 34;
// const food = "rice";

// console.log({ name, color, number, food });

const mul = (a = 0, b = 1) => {
  const res = a + b;

  return res;
};

console.log(mul());
