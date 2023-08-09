const products = [
  { id: 1, name: "samsung Phone", price: 40000 },
  { id: 2, name: "samsung phone", price: 40000 },
  { id: 3, name: "samsung Phone", price: 40000 },
  { id: 4, name: "samsung Laptop", price: 40000 },
  { id: 5, name: "samsung laptop", price: 40000 },
];

function matchProduct(products, search) {
  const match = [];
  for (let product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}

// matchProduct(products);

console.log(matchProduct(products, "phone"));

function compare(a, b) {
  if (a.toString() === b) {
    return true;
  } else {
    return false;
  }
}
const result = compare(25, 25);
console.log(result);
