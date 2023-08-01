var mobile = {
  model: "galaxy s23 ultra",
  ram: "8gb",
  brand: "samsung",
  price: 108000,
};

// console.log(mobile);

// console.log(mobile.price);

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 2,
  mouse: 1,
  pen: 24,
};

// when you know the specific property/key name in an object, use dot notation
var penCount = shoppingCart.mouse;

// alternative
var penCount1 = shoppingCart["pen"];

// when you needs keys/properties name;
var properties = Object.keys(shoppingCart);

//property value;

// var propertyValue = Object.values(shoppingCart);

var propertyName = "pen";

var propertyValue = shoppingCart[propertyName];

// console.log(penCount1);
// console.log(penCount);
// console.log(properties);
// console.log(propertyValue);
console.log(shoppingCart);

// set property value

shoppingCart.mouse = 20;
console.log(shoppingCart);

shoppingCart["mouse"] = 15;

console.log(shoppingCart);

var value = "mouse";

shoppingCart[value] = 3;

console.log(shoppingCart);
