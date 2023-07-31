var numbers = [45, 85, 13, 135, 332, 55, 23, 33, 33];

for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
