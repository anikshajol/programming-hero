const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {
  id: 221,
  class: 11,
  name: "agun",
};

const friends = [12, 15, 11, 25, 29, 30];

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends); //checking an array this is not the right way.
console.log(Array.isArray(friends));
console.log(typeof add);

//----------------------------------****-------------------------------------------

// includes

console.log(friends.includes(15));
console.log(friends.includes(1));

if (friends.indexOf(1) !== -1) {
  console.log("has elements");
} else {
  console.log("No elements here");
}

const newFriendsAge = [32, 35, 37];

const allFriends = friends.concat(newFriendsAge);

console.log(allFriends);
