var num = [1, 2, 3, 4];

num.push(5);
// console.log(num);

var friends = ["a", "b", "c", "d"];

friends.push("e", "f");

friends.pop();
var element = friends.pop();

// console.log(friends);
// console.log(element);

// friends.unshift("first add"); // add 1st position to an array

// friends.shift();
// friends.shift();

// console.log(friends);

friends = ["i am ", ...friends];
console.log(friends);
