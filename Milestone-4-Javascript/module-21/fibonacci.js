const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
  let element = i;
  fibo[i] = fibo[element - 1] + fibo[element - 2];
}

console.log(fibo);
