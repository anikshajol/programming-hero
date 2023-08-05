const friends = [12, 15, 11, 25, 29, 30];

const slice = friends.slice(1, 3);

// console.log(slice);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const splice = friends.splice(1, 3, "a", "b", "c");

console.log(friends);
console.log(splice);
