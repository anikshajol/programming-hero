const nayok = {
  name: "sakib khan",
  id: 221,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Raj", "Salman", "Amir"],
  movies: [
    { name: "no1 shakib khan", year: "2018" },
    { name: "king khan", year: 2016 },
  ],
  act: function () {
    console.log("acting like shakib khan");
  },
  car: {
    brand: "Tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "tesla",
      ceo: "Elon Musk",
      country: "USA",
    },
  },
};

console.log(nayok.movies);

nayok.act();
