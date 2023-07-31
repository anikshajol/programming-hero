// for (i = 0; i < 10; i++) {
//   if (i >= 5) {
//     break;
//   }
//   console.log(i);
// }

var numbers = [45, 85, 13, 135, 332, 55, 23, 33, 33];

for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}
