const shoppingCart = [
  {
    name: "shoe",
    price: 2500,
  },
  {
    name: "shirt",
    price: 1500,
  },
  {
    name: "pant",
    price: 1200,
  },
];

function totalShopping(shopping) {
  let totalShopping = 0;
  for (let i = 0; i < shopping.length; i++) {
    const element = shopping[i];

    totalShopping += element.price;
  }

  console.log(totalShopping);
}

totalShopping(shoppingCart);
