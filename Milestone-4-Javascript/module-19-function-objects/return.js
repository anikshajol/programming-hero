function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;

  return sum;
}

// var total = add(10, 90);

// console.log(total);

// function bringSingara(money) {
//   var singaraPrice = 10;
//   var singaraQuantity = money / singaraPrice;
//   return singaraQuantity;
// }

// var singaras = bringSingara(200);
// console.log(singaras);

function getAverage(assignment1, assignment2, assignment3) {
  var totalMarks = assignment1 + assignment2 + assignment3;
  var averageMarks = parseFloat((totalMarks / 3).toFixed(2));
  //   console.log(averageMarks);
  return averageMarks;
}

var marks = getAverage(20, 50, 40);

console.log(marks);
