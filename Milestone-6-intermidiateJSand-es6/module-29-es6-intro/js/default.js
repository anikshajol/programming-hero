// old method
// function add(first, second) {
//   //   if (second === undefined) {
//   //     second = 0;
//   //   }

//   second = second || 0;

//   const total = first + second;
//   return total;
// }

// const result = add(10);
// console.log(result);

// new method

function add(first, second = 0) {
  const total = first + second;
  return total;
}

console.log(add(10));

function fullName(firstName, lastName = "hasan") {
  const fullName = firstName + " " + lastName;

  return fullName;
}

console.log(fullName("Anik"));
