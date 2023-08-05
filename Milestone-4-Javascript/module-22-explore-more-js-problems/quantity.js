const shoppingCart = [
  {
    name: "shoe",
    price: 2500,
    quantity: 5,
  },
  {
    name: "shirt",
    price: 1500,
    quantity: 3,
  },
  {
    name: "pant",
    price: 1200,
    quantity: 4,
  },
];

function totalShopping(shopping) {
  let totalShopping = 0;
  for (let i = 0; i < shopping.length; i++) {
    const element = shopping[i];
    const totalQuantity = element.price * element.quantity;

    totalShopping = totalShopping + totalQuantity;
  }

  return totalShopping;
}

console.log(totalShopping(shoppingCart));
