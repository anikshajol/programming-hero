function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments); //array like object
  let ar = arguments;
  for (let i = 0; i < ar.length; i++) {
    console.log(i, ar[i]);
  }
}

add(12, 13, 45, 37, 12);
