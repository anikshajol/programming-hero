// data access
const data = [{ id: 1, name: "anik", address: "banani" }];

// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenovo", price: 55555 },
    { id: 2, name: "apple", price: 111111 },
  ],
};

// second product price

// console.log(products.data[1].price);

const user = {
  id: 11,
  name: "Raj",
  address: {
    street: {
      first: "54/1, uttor side",
      second: "poribag er goli",
      third: "no dorai",
    },
    city: "dhaka",
  },
};
const user2 = {
  id: 11,
  name: "Raj",
  address: {
    first: "54/1, uttor side",
    second: "poribag er goli",
    third: "no dorai",

    city: "dhaka",
  },
};

const { address } = user;

const { street } = address;

const { second } = street;

// console.log(address);
// console.log(street);
// console.log(second);

console.log(user.address.street.second); //-->chain

console.log(user2.address?.street?.second); //--> ? use optional chaining for avoiding error
