const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";

  quantityField.value = "";
  //   console.log(product, quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");

  const productContainer = document.getElementById("product-container");

  li.innerText = `${product}: ${quantity}`;

  productContainer.appendChild(li);
  savedToLocalStorage(product, quantity);
};

const getFromLocalStorage = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const savedToLocalStorage = (product, quantity) => {
  const cart = getFromLocalStorage();
  cart[product] = quantity;

  const cartStringified = JSON.stringify(cart);

  localStorage.setItem("cart", cartStringified);

  console.log(cartStringified);
};

const displayFromLocalStorage = () => {
  const savedCart = getFromLocalStorage();
  console.log(savedCart);

  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
};

displayFromLocalStorage();
