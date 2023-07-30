// problem-1;
var fruits = ["Apple", "Banana", "Orange"];

// a. find the index of banana and replace banana with  mango

var position = fruits.indexOf("Banana");

// console.log(position);

fruits[1] = "Mango";

// console.log(fruits);

// b) Remove ‘Orange’ and add ‘Watermelon’.

fruits.pop("Orange");

// console.log(fruits);

fruits.push("Watermelon");

// console.log(fruits);

var myScore = 80;
var tomsScore = 66;
var janesScore = 95;
var petersScore = 56;
var johnsScore = 40;

if (myScore >= 80 && myScore <= 100) {
  console.log(myScore, "A");
} else if (myScore >= 60 && myScore <= 79) {
  console.log("B");
} else if (myScore >= 50 && myScore < 60) {
  console.log("C");
} else if (myScore >= 40 && myScore < 50) {
  console.log("D");
} else if (myScore <= 39 && myScore >= 0) {
  console.log("F");
} else {
  console.log("Not a valid number");
}
