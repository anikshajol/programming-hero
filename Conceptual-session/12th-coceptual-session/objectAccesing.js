const person = { name: "anik", age: 30, address: "Tangail" };

// dot notation

// console.log(person.age);

const complexObject = {
  id: 1,
  name: "Main Object",
  info: {
    description: "This is a complex nested object",
    author: {
      firsName: "john",
      lastName: "doe",
    },
  },

  data: {
    values: [10, 20, 30],
    settings: {
      isEnabled: true,
      maxItems: 5,
    },
  },
};

//name,description, lastName, last element of values, maxItems

console.log("Name:", complexObject.name);
console.log("Description:", complexObject.info.description);
console.log("Last Name:", complexObject.info.author.lastName);
console.log("Last Name:", complexObject.data.values[2]);
console.log(
  "Last Name:",
  complexObject.data.values[complexObject.data.values.length - 1]
);

console.log("maxItems", complexObject.data.settings.maxItems);
