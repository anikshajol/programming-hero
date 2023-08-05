const phones = [
  {
    name: "samsung",
    camera: 100,
    storage: "32gb",
    price: 120000,
    color: "green",
  },
  {
    name: "OnePlus",
    camera: 40,
    storage: "123gb",
    price: 35000,
    color: "blue",
  },
  {
    name: "iPhone",
    camera: 12,
    storage: "32gb",
    price: 149000,
    color: "red",
  },
  {
    name: "oppo",
    camera: 12,
    storage: "32gb",
    price: 12000,
    color: "blue",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    if (phones[i].price < cheapest.price) {
      cheapest = phones[i];
    }
  }
  return cheapest;
}

const cheapestPhones = cheapestPhone(phones);

console.log("cheapest phone", cheapestPhones);

// cheapestPhones;
